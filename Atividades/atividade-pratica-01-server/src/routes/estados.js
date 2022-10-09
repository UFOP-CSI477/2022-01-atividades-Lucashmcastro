import { Router} from 'express';
import { CreateEstadoController } from '../controller/estados/CreateEstadoController.js';
import { GetAllEstadoController } from '../controller/estados/GetAllEstadoController.js';
import { GetByIdEstadoController } from '../controller/estados/GetByIdEstadoController.js';
import { UpdateEstadoController } from '../controller/estados/UpdateEstadoController.js'; 

const estadoRouter = Router();
const createEstadoController = new CreateEstadoController();
const getAllEstadoController = new GetAllEstadoController();
const getByIdEstadoController = new GetByIdEstadoController();
const updateEstadoController = new UpdateEstadoController();

estadoRouter.post('/estados', createEstadoController.handle);
estadoRouter.get('/estados', getAllEstadoController.handle);
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);
estadoRouter.put('/estados', updateEstadoController.handle);

export { estadoRouter };
