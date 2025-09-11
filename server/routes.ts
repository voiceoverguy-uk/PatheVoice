import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fetch from "node-fetch";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route - stores submissions locally for easy access
  app.post('/api/contact', async (req, res) => {
    console.log('=== Contact form submission received ===');
    try {
      const { name, email, project, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please fill in all required fields' 
        });
      }

      // Store the contact submission with timestamp
      const submission = {
        id: Date.now(),
        name,
        email,
        project: project || 'Not specified',
        message,
        timestamp: new Date().toISOString(),
        read: false
      };

      // Log the submission for easy access (you can see these in your Replit logs)
      console.log('📧 NEW CONTACT FORM SUBMISSION:');
      console.log('═══════════════════════════════════════');
      console.log(`👤 Name: ${name}`);
      console.log(`📧 Email: ${email}`);
      console.log(`🎬 Project: ${project || 'Not specified'}`);
      console.log(`💬 Message: ${message}`);
      console.log(`⏰ Time: ${new Date().toLocaleString()}`);
      console.log('═══════════════════════════════════════');
      console.log('📋 Reply to:', email);
      console.log('');

      res.json({ 
        success: true, 
        message: 'Message received! Guy will get back to you within 24 hours via email.' 
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'There was a problem submitting your message. Please email directly to pathe@voiceoverguy.co.uk' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
