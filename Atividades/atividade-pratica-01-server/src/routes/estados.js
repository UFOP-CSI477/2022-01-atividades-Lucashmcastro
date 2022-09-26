import { Router} from 'express';
import { CreateEstadoController } from '../controller/estados/CreateEstadoController.js';
import { GetAllEstadoController } from '../controller/estados/GetAllEstadoController.js';
import { GetByIdEstadoController } from '../controller/estados/GetByIdEstadoController.js';
import { UpdateEstadoController } from '../controller/estados/UpdateEstadoController.js'; 
import { estadoRouter } from './estados';

const estadoRouter = Router();
const CreateEstadoController = new CreateEstadoController();
const GetAllEstadoController = new GetAllEstadoController();
const GetByIdEstadoController = new GetByIdEstadoController();
const UpdateEstadoController = new UpdateEstadoController();

estadoRouter.post('/estados', createEstadoController.handle);
estadoRouter.get('/estados', getAllEstadoController.handle);
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);
estadoRouter.put('/estados', updateEstadosController.handle);

export { estadoRouter };
