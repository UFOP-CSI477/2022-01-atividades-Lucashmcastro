import { Router } from 'express';
import { CreateProdutoController } from '../controller/produtos/CreateProdutoController.js';
import { GetAllProdutoController } from '../controller/produtos/GetAllProdutoController.js';
import { GetByIdProdutoController } from '../controller/produtos/GetByIdProdutoController.js';
import { UpdateProdutoController } from '../controller/produtos/UpdateProdutoController.js';
import { DeleteProdutoController } from '../controller/produtos/DeleteProdutoController.js';

const produtoRouter = Router();
const createProdutoController = new CreateProdutoController();
const getAllProdutoController = new GetAllProdutoController();
const getByIdProdutoController = new GetByIdProdutoController();
const updateProdutoController = new UpdateProdutoController();
const deleteProdutoController = new DeleteProdutoController();

produtoRouter.post('/produtos', createProdutoController.handle);
produtoRouter.get('/produtos', getAllProdutoController.handle);
produtoRouter.get('/produtos/:id', getByIdProdutoController.handle);
produtoRouter.put('/produtos', updateProdutoController.handle);
produtoRouter.delete('/produtos/:id', deleteProdutoController.handle);

export { produtoRouter };