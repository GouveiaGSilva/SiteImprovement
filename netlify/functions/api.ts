import express, { Router } from 'express';
import serverless from 'serverless-http';

const api = express();
const router = Router();

// Middleware
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

// Contact form endpoint
router.post('/contact', (req, res) => {
  const { name, email, company, phone, message } = req.body;
  
  // Log the contact form submission
  console.log('Contact form submission:', { name, email, company, phone, message });
  
  // In a real application, you would:
  // - Validate the data
  // - Send an email notification
  // - Save to a database
  // - Integrate with a CRM
  
  res.json({ 
    success: true,
    message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
  });
});

// Newsletter signup endpoint
router.post('/newsletter', (req, res) => {
  const { email } = req.body;
  
  // Log the newsletter signup
  console.log('Newsletter signup:', { email });
  
  // In a real application, you would:
  // - Validate the email
  // - Add to mailing list (e.g., Mailchimp, SendGrid)
  // - Save to database
  
  res.json({ 
    success: true,
    message: 'Inscrição realizada com sucesso! Você receberá nossas novidades em breve.' 
  });
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Mount router at /api
api.use('/api', router);

// Export serverless handler
export const handler = serverless(api);
