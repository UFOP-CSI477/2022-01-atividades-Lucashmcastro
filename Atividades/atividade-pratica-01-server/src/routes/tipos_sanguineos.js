import { Router } from 'express';
import { CreateTipoSanguineoController } from '../controller/tipos_sanguineos/CreateTipoSanguineoController.js';
import { GetAllTipoSanguineoController } from '../controller/tipos_sanguineos/GetAllTipoSanguineoController.js';
import { GetByIdTipoSanguineoController } from '../controller/tipos_sanguineos/GetByIdTipoSanguineoController.js';
import { UpdateTipoSanguineoController } from '../controller/tipos_sanguineos/UpdateTipoSanguineoController.js';

const tipoSanguineoRouter = Router();
const createTipoSanguineoController = new CreateTipoSanguineoController();
const getAllTipoSanguineoController = new GetAllTipoSanguineoController();
const getByIdTipoSanguineoController = new GetByIdTipoSanguineoController();
const updateTipoSanguineoController = new UpdateTipoSanguineoController();

tipoSanguineoRouter.post('/tiposSanguineos', createTipoSanguineoController.handle);
tipoSanguineoRouter.get('/tiposSanguineos', getAllTipoSanguineoController.handle);
tipoSanguineoRouter.get('/tiposSanguineos', getByIdTipoSanguineoController.handle);
tipoSanguineoRouter.put('/tiposSanguineos', updateTipoSanguineoController.handle);

export { tipoSanguineoRouter };