import { Router } from 'express';
import { CreateDoacaoController } from '../controller/doacoes/CreateDoacaoController.js';
import { GetAllDoacaoController } from '../controller/doacoes/GetAllDoacaoController.js';
import { GetByIdDoacaoController } from '../controller/doacoes/GetByIdDoacaoController.js';
import { UpdateDoacaoController } from '../controller/doacoes/UpdateDoacaoController.js';

const doacaoRouter = Router();
const CreateDoacaoController = new CreateDoacaoController();
const GetAllDoacaoController = new GetAllDoacaoController();
const GetByIdDoacaoController = new GetByIdDoacaoController();
const UpdateDoacaoController = new UpdateDoacaoController();

doacaoRouter.post('/doacoes', CreateDoacaoController.handle);
doacaoRouter.get('/doacoes', getAllEstadoController.handle);
doacaoRouter.get('/doacoes', GetByIdDoacaoController.handle);
doacaoRouter.put('/doacoes', UpdateDoacaoController.handle);

export { doacaoRouter };