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

tipoSanguineoRouter.post('tipos_sanguineos', createTipoSanguineoController.handle);
tipoSanguineoRouter.get('tipos_sanguineos', getAllTipoSanguineoController.handle);
tipoSanguineoRouter.get('tipos_sanguineos', getByIdTipoSanguineoController.handle);
tipoSanguineoRouter.put('tipos_sanguineos', updateTipoSanguineoController.handle);

export { tipoSanguineoRouter };