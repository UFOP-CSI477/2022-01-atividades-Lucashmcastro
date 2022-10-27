import { Router } from 'express';
import { CreateAcaoController } from '../controller/acoes/CreateAcaoController';
import { GetAllAcaoController } from '../controller/acoes/GetAllAcaoController';
import { GetByIdAcaoController } from '../controller/acoes/GetByIdAcaoController';
import { UpdateAcaoController } from '../controller/acoes/UpdateAcaoController';
import { DeleteAcaoController } from '../controller/acoes/DeleteAcaoController';

const acaoRouter = Router();
const createAcaoController = new CreateAcaoController();
const getAllAcaoController = new GetAllAcaoController();
const getByIdAcaoController = new GetByIdAcaoController();
const updateAcaoController = new UpdateAcaoController();
const deleteAcaoController = new DeleteAcaoController();

acaoRouter.post('/acoes', createAcaoController.handle);
acaoRouter.get('/acoes', getAllAcaoController.handle);
acaoRouter.get('/acoes/:id', getByIdAcaoController.handle);
acaoRouter.put('/acoes', updateAcaoController.handle);
acaoRouter.delete('/acoes/:id', deleteAcaoController.handle);

export { acaoRouter };