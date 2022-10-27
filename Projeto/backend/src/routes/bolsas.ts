import { Router } from 'express';
import { CreateBolsaController } from '../controller/bolsas/CreateBolsaController';
import { GetAllBolsaController } from '../controller/bolsas/GetAllBolsaController';
import { GetByIdBolsaController } from '../controller/bolsas/GetByIdBolsaController';
import { UpdateBolsaController } from '../controller/bolsas/UpdateBolsaController';
import { DeleteBolsaController } from '../controller/bolsas/DeleteBolsaController';

const bolsaRouter = Router();
const createBolsaController = new CreateBolsaController();
const getAllBolsaController = new GetAllBolsaController();
const getByIdBolsaController = new GetByIdBolsaController();
const updateBolsaController = new UpdateBolsaController();
const deleteBolsaController = new DeleteBolsaController();

bolsaRouter.post('/bolsas', createBolsaController.handle);
bolsaRouter.get('/bolsas', getAllBolsaController.handle);
bolsaRouter.get('/bolsas/:id', getByIdBolsaController.handle);
bolsaRouter.put('/bolsas', updateBolsaController.handle);
bolsaRouter.delete('/bolsas/:id', deleteBolsaController.handle);

export { bolsaRouter };