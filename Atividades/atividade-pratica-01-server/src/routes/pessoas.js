import { Router } from 'express';
import { CreatePessoaController } from '../controller/pessoas/CreatePessoaController.js';
import { GetAllPessoaController } from '../controller/pessoas/GetAllPessoaController.js';
import { GetByIdPessoaController } from '../controller/pessoas/GetByIdPessoaController.js';
import { UpdatePessoaController } from '../controller/pessoas/UpdatePessoaController.js';

const pessoaRouter = Router();
const CreatePessoaController = new CreatePessoaController();
const GetAllPessoaController = new GetAllPessoaController();
const GetByIdPessoaController = new GetByIdPessoaController();
const UpdatePessoaController = new UpdatePessoaController();

pessoaRouter.post('/pessoas', CreatePessoaController.handle);
pessoaRouter.get('/pessoas', GetAllPessoaController.handle);
pessoaRouter.get('/pessoas', GetByIdPessoaController.handle);
pessoaRouter.put('/pessoas', UpdatePessoaController.handle);

export { pessoaRouter };
