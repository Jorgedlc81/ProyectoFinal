import { Router } from 'express';
import Service from '../models/serviceModels.js';

const serviceRouter = Router();

// Obtener todos los servicios
serviceRouter.get('/', async (req, res) => {
  try {
    const services = await Service.findAll();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo servicio
serviceRouter.post('/', async (req, res) => {
  try {
    const newService = await Service.create(req.body);
    res.status(201).json(newService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener un servicio por ID
serviceRouter.get('/:id', async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar un servicio por ID
serviceRouter.put('/:id', async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    await service.update(req.body);
    res.json(service);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un servicio por ID
serviceRouter.delete('/:id', async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    await service.destroy();
    res.json({ message: 'Service deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default serviceRouter;
