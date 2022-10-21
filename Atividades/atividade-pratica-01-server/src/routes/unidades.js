import { Router } from 'express';
import { CreateUnidadeController } from '../controller/unidades/CreateUnidadeController.js';
import { GetAllUnidadeController } from '../controller/unidades/GetAllUnidadeController.js';
import { GetByIdUnidadeController } from '../controller/unidades/GetByIdUnidadeController.js';
import { UpdateUnidadeController } from '../controller/unidades/UpdateUnidadeController.js';
import { DeleteUnidadeController } from '../controller/unidades/DeleteUnidadeController.js';

const unidadeRouter = Router();
const createUnidadeController = new CreateUnidadeController();
const getAllUnidadeController = new GetAllUnidadeController();
const getByIdUnidadeController = new GetByIdUnidadeController();
const updateUnidadeController = new UpdateUnidadeController();
const deleteUnidadeController = new DeleteUnidadeController();

unidadeRouter.post('/unidades', createUnidadeController.handle);
unidadeRouter.get('/unidades', getAllUnidadeController.handle);
unidadeRouter.get('/unidades/:id', getByIdUnidadeController.handle);
unidadeRouter.put('/unidades', updateUnidadeController.handle);
unidadeRouter.delete('/unidades/:id', deleteUnidadeController.handle);

export { unidadeRouter };