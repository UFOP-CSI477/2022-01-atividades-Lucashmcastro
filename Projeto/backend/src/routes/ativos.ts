import { Router } from 'express';
import { CreateAtivoController } from '../controller/ativos/CreateAtivoController';
import { GetAllAtivoController } from '../controller/ativos/GetAllAtivoController';
import { GetByIdAtivoController } from '../controller/ativos/GetByIdAtivoController';
import { UpdateAtivoController } from '../controller/ativos/UpdateAtivoController';
import { DeleteAtivoController } from '../controller/ativos/DeleteAtivoController';

const ativoRouter = Router();
const createAtivoController = new CreateAtivoController();
const getAllAtivoController = new GetAllAtivoController();
const getByIdAtivoController = new GetByIdAtivoController();
const updateAtivoController = new UpdateAtivoController();
const deleteAtivoController = new DeleteAtivoController();

ativoRouter.post('/ativos', createAtivoController.handle);
ativoRouter.get('/ativos', getAllAtivoController.handle);
ativoRouter.get('/ativos/:id', getByIdAtivoController.handle);
ativoRouter.put('/ativos', updateAtivoController.handle);
ativoRouter.delete('/ativos/:id', deleteAtivoController.handle);

export { ativoRouter };