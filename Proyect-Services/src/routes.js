import { Router } from 'express';
import courseRouter from './routes/courseRouter.js';
import serviceRouter from './routes/serviceRouter.js';
import customerRouter from './routes/customerRouter.js';


const router = Router();

// Rutas para cursos
router.use('/courses', courseRouter);

// Rutas para servicios
router.use('/services', serviceRouter);

// Rutas para Mensajes
router.use('/customers', customerRouter);

export default router;
