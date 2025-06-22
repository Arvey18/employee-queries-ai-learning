import configs from './config/config.js';
import express from 'express';
import employeeRoutes from './routes/employeeRoutes.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = configs.port;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use employee routes
app.use('/api/employee', employeeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
