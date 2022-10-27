import { Router } from 'express';
import { CreateIndicadorController } from '../controller/indicadores/CreateIndicadorController';
import { GetAllIndicadorController } from '../controller/indicadores/GetAllIndicadorController';
import { GetByIdIndicadorController } from '../controller/indicadores/GetByIdIndicadorController';
import { UpdateIndicadorController } from '../controller/indicadores/UpdateIndicadorController';
import { DeleteIndicadorController } from '../controller/indicadores/DeleteIndicadorController';

const indicadorRouter = Router();
const createIndicadorController = new CreateIndicadorController();
const getAllIndicadorController = new GetAllIndicadorController();
const getByIdIndicadorController = new GetByIdIndicadorController();
const updateIndicadorController = new UpdateIndicadorController();
const deleteIndicadorController = new DeleteIndicadorController();

indicadorRouter.post('/indicadores', createIndicadorController.handle);
indicadorRouter.get('/indicadores', getAllIndicadorController.handle);
indicadorRouter.get('/indicadores/:id', getByIdIndicadorController.handle);
indicadorRouter.put('/indicadores', updateIndicadorController.handle);
indicadorRouter.delete('/indicadores/:id', deleteIndicadorController.handle);

export { indicadorRouter };