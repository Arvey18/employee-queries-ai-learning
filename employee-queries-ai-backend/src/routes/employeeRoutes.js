import { Router } from 'express';
import handleEmployeeQuery from '../controllers/employeeController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

// Define the endpoint for employee queries
router.post('/query', authMiddleware, handleEmployeeQuery);

export default router;
