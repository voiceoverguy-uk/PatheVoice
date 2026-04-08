import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 4173;
const ROUTES = ['/', '/privacy-policy'];

function waitForServer(port, timeout = 20000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      fetch(`http://127.0.0.1:${port}/`)
        .then(() => resolve())
        .catch(() => {
          if (Date.now() - start > timeout) {
            reject(new Error(`Server did not start on port ${port} within ${timeout}ms`));
          } else {
            setTimeout(check, 300);
          }
        });
    };
    check();
  });
}

async function prerender() {
  const viteProcess = spawn(
    'npx',
    ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'],
    { stdio: ['ignore', 'pipe', 'pipe'] }
  );

  viteProcess.stdout.on('data', (d) => process.stdout.write(d));
  viteProcess.stderr.on('data', (d) => process.stderr.write(d));

  try {
    console.log('Starting vite preview server...');
    await waitForServer(PORT);
    console.log(`Vite preview ready on http://127.0.0.1:${PORT}`);

    const browser = await chromium.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    try {
      for (const route of ROUTES) {
        const page = await browser.newPage();

        page.on('pageerror', (err) =>
          console.warn(`[prerender] Page error on ${route}:`, err.message)
        );
        page.on('console', (msg) => {
          if (msg.type() === 'error') {
            console.warn(`[prerender] Console error on ${route}:`, msg.text());
          }
        });

        await page.goto(`http://127.0.0.1:${PORT}${route}`, {
          waitUntil: 'networkidle',
          timeout: 30000,
        });

        await page.waitForTimeout(500);

        const html = await page.content();

        let outPath;
        if (route === '/') {
          outPath = path.join(__dirname, 'dist', 'index.html');
        } else {
          const dir = path.join(__dirname, 'dist', route.replace(/^\//, ''));
          await mkdir(dir, { recursive: true });
          outPath = path.join(dir, 'index.html');
        }

        await writeFile(outPath, html, 'utf-8');
        const label = route === '/' ? 'dist/index.html' : `dist${route}/index.html`;
        console.log(`✓ Pre-rendered ${route} → ${label}`);

        await page.close();
      }
    } finally {
      await browser.close();
    }
  } finally {
    viteProcess.kill();
  }

  console.log('Pre-rendering complete.');
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
