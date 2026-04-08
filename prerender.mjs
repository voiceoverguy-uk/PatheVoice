import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFile, mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const PORT = 4173;

const ROUTES = ['/', '/privacy-policy'];

function getMimeType(ext) {
  const map = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf',
    '.mp3': 'audio/mpeg',
    '.txt': 'text/plain',
    '.webp': 'image/webp',
  };
  return map[ext] || 'application/octet-stream';
}

const server = createServer(async (req, res) => {
  const url = (req.url || '/').split('?')[0];

  if (url.startsWith('/api/')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{}');
    return;
  }

  const ext = path.extname(url);
  let filePath = ext
    ? path.join(DIST, url)
    : path.join(DIST, 'index.html');

  try {
    const content = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': getMimeType(path.extname(filePath)) });
    res.end(content);
  } catch {
    try {
      const content = await readFile(path.join(DIST, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  }
});

async function prerender() {
  await new Promise((resolve) => server.listen(PORT, '127.0.0.1', resolve));
  console.log(`Static server ready on http://127.0.0.1:${PORT}`);

  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();

      page.on('pageerror', () => {});
      page.on('console', () => {});

      await page.goto(`http://127.0.0.1:${PORT}${route}`, {
        waitUntil: 'networkidle',
        timeout: 30000,
      });

      await page.waitForTimeout(500);

      const html = await page.content();

      let outPath;
      if (route === '/') {
        outPath = path.join(DIST, 'index.html');
      } else {
        const dir = path.join(DIST, route.replace(/^\//, ''));
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
    await new Promise((resolve) => server.close(resolve));
  }

  console.log('Pre-rendering complete.');
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
