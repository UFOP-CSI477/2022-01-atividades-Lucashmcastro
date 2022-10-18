import { Router } from 'express';
import { CreateDoacaoController } from '../controller/doacoes/CreateDoacaoController.js';
import { GetAllDoacaoController } from '../controller/doacoes/GetAllDoacaoController.js';
import { GetByIdDoacaoController } from '../controller/doacoes/GetByIdDoacaoController.js';
import { UpdateDoacaoController } from '../controller/doacoes/UpdateDoacaoController.js';
import { DeleteDoacaoController } from '../controller/doacoes/DeleteDoacaoController.js';

const doacaoRouter = Router();
const createDoacaoController = new CreateDoacaoController();
const getAllDoacaoController = new GetAllDoacaoController();
const getByIdDoacaoController = new GetByIdDoacaoController();
const updateDoacaoController = new UpdateDoacaoController();
const deleteDoacaoController = new DeleteDoacaoController();

doacaoRouter.post('/doacoes', createDoacaoController.handle);
doacaoRouter.get('/doacoes', getAllDoacaoController.handle);
doacaoRouter.get('/doacoes/:id', getByIdDoacaoController.handle);
doacaoRouter.put('/doacoes', updateDoacaoController.handle);
doacaoRouter.delete('/doacoes/:id', deleteDoacaoController.handle);

export { doacaoRouter };