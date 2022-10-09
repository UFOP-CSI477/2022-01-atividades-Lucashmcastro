import { Router } from 'express';
import { CreateLocalColetaController } from '../controller/locais_coleta/CreateLocalColetaController.js';
import { GetAllLocalColetaController } from '../controller/locais_coleta/GetAllLocalColetaController.js';
import { GetByIdLocalColetaController } from '../controller/locais_coleta/GetByIdLocalColetaController.js';
import { UpdateLocalColetaController } from '../controller/locais_coleta/UpdateLocalColetaController.js';

const localColetaRouter = Router();
const createLocalColetaController = new CreateLocalColetaController();
const getAllLocalColetaController = new GetAllLocalColetaController();
const getByIdLocalColetaController = new GetByIdLocalColetaController();
const updateLocalColetaController = new UpdateLocalColetaController();

localColetaRouter.post('/locais_coleta', createLocalColetaController.handle);
localColetaRouter.get('/locais_coleta', getAllLocalColetaController.handle);
localColetaRouter.get('/locais_coleta', getByIdLocalColetaController.handle);
localColetaRouter.put('/locais_coleta', updateLocalColetaController.handle);

export { localColetaRouter };
