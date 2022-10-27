import { Router } from 'express';
import { CreateCotacaoController } from '../controller/cotacoes/CreateCotacaoController';
import { GetAllCotacaoController } from '../controller/cotacoes/GetAllCotacaoController';
import { GetByIdCotacaoController } from '../controller/cotacoes/GetByIdCotacaoController';
import { UpdateCotacaoController } from '../controller/cotacoes/UpdateCotacaoController';
import { DeleteCotacaoController } from '../controller/cotacoes/DeleteCotacaoController';

const cotacaoRouter = Router();
const createCotacaoController = new CreateCotacaoController();
const getAllCotacaoController = new GetAllCotacaoController();
const getByIdCotacaoController = new GetByIdCotacaoController();
const updateCotacaoController = new UpdateCotacaoController();
const deleteCotacaoController = new DeleteCotacaoController();

cotacaoRouter.post('/cotacoes', createCotacaoController.handle);
cotacaoRouter.get('/cotacoes', getAllCotacaoController.handle);
cotacaoRouter.get('/cotacoes/:id', getByIdCotacaoController.handle);
cotacaoRouter.put('/cotacoes', updateCotacaoController.handle);
cotacaoRouter.delete('/cotacoes/:id', deleteCotacaoController.handle);

export { cotacaoRouter };