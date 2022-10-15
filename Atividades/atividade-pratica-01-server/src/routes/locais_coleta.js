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

localColetaRouter.post('/locaisColeta', createLocalColetaController.handle);
localColetaRouter.get('/locaisColeta', getAllLocalColetaController.handle);
localColetaRouter.get('/locaisColeta', getByIdLocalColetaController.handle);
localColetaRouter.put('/locaisColeta', updateLocalColetaController.handle);

export { localColetaRouter };
