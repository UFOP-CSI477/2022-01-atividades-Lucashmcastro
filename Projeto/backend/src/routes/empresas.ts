import { Router } from 'express';
import { CreateEmpresaController } from '../controller/empresas/CreateEmpresaController';
import { GetAllEmpresaController } from '../controller/empresas/GetAllEmpresaController';
import { GetByIdEmpresaController } from '../controller/empresas/GetByIdEmpresaController';
import { UpdateEmpresaController } from '../controller/empresas/UpdateEmpresaController';
import { DeleteEmpresaController } from '../controller/empresas/DeleteEmpresaController';

const empresaRouter = Router();
const createEmpresaController = new CreateEmpresaController();
const getAllEmpresaController = new GetAllEmpresaController();
const getByIdEmpresaController = new GetByIdEmpresaController();
const updateEmpresaController = new UpdateEmpresaController();
const deleteEmpresaController = new DeleteEmpresaController();

empresaRouter.post('/empresas', createEmpresaController.handle);
empresaRouter.get('/empresas', getAllEmpresaController.handle);
empresaRouter.get('/empresas/:id', getByIdEmpresaController.handle);
empresaRouter.put('/empresas', updateEmpresaController.handle);
empresaRouter.delete('/empresas/:id', deleteEmpresaController.handle);

export { empresaRouter };