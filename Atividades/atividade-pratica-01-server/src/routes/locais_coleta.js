import { Router } from 'express';
import { CreateLocalColetaController } from '../controller/locais_coleta/CreateLocalColetaController.js';
import { GetAllLocalColetaController } from '../controller/locais_coleta/GetAllLocalColetaController.js';
import { GetByIdLocalColetaController } from '../controller/locais_coleta/GetByIdLocalColetaController.js';
import { UpdateLocalColetaController } from '../controller/locais_coleta/UpdateLocalColetaController.js';

const localColetaRouter = Router();
const CreateLocalColetaController = new CreateLocalColetaController();
const GetAllLocalColetaController = new GetAllLocalColetaController();
const GetByIdLocalColetaController = new GetByIdLocalColetaController();
const UpdateLocalColetaController = new UpdateLocalColetaController();

localColetaRouter.post('/locais_coleta', CreateLocalColetaController.handle);
localColetaRouter.get('/locais_coleta', GetAllLocalColetaController.handle);
localColetaRouter.get('/locais_coleta', GetByIdLocalColetaController.handle);
localColetaRouter.put('/locais_coleta', UpdateLocalColetaController.handle);

export { localColetaRouter };
