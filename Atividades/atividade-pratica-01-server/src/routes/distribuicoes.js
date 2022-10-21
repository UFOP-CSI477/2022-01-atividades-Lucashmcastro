import { Router } from 'express';
import { CreateDistribuicaoController } from '../controller/distribuicoes/CreateDistribuicaoController.js';
import { GetAllDistribuicaoController } from '../controller/distribuicoes/GetAllDistribuicaoController.js';
import { GetByIdDistribuicaoController } from '../controller/distribuicoes/GetByIdDistribuicaoController.js';
import { UpdateDistribuicaoController } from '../controller/distribuicoes/UpdateDistribuicaoController.js';
import { DeleteDistribuicaoController } from '../controller/distribuicoes/DeleteDistribuicaoController.js';

const distribuicaoRouter = Router();
const createDistribuicaoController = new CreateDistribuicaoController();
const getAllDistribuicaoController = new GetAllDistribuicaoController();
const getByIdDistribuicaoController = new GetByIdDistribuicaoController();
const updateDistribuicaoController = new UpdateDistribuicaoController();
const deleteDistribuicaoController = new DeleteDistribuicaoController();

distribuicaoRouter.post('/distribuicoes', createDistribuicaoController.handle);
distribuicaoRouter.get('/distribuicoes', getAllDistribuicaoController.handle);
distribuicaoRouter.get('/distribuicoes/:id', getByIdDistribuicaoController.handle);
distribuicaoRouter.put('/distribuicoes', updateDistribuicaoController.handle);
distribuicaoRouter.delete('/distribuicoes/:id', deleteDistribuicaoController.handle);

export { distribuicaoRouter };