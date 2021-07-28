// Import node module
import express from 'express';
const router = express.Router();

// Arrow functions
router.get('/login', (req, res) => {
  res.send({message: 'Login page'});
});

// Exporting an object as the default import for this module
export default router;