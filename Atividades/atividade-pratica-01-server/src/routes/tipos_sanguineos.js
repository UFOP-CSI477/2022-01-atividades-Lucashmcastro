import { Router } from 'express';
import { CreateTipoSanguineoController } from '../controller/tipos_sanguineos/CreateTipoSanguineoController.js';
import { GetAllTipoSanguineoController } from '../controller/tipos_sanguineos/GetAllTipoSanguineoController.js';
import { GetByIdTipoSanguineoController } from '../controller/tipos_sanguineos/GetByIdTipoSanguineoController.js';
import { UpdateTipoSanguineoController } from '../controller/tipos_sanguineos/UpdateTipoSanguineoController.js';

const tipoSanguineoRouter = Router();
const CreateTipoSanguineoController = new CreateTipoSanguineoController();
const GetAllTipoSanguineoController = new GetAllTipoSanguineoController();
const GetByIdTipoSanguineoController = new GetByIdTipoSanguineoController();
const UpdateTipoSanguineoController = new UpdateTipoSanguineoController();

tipoSanguineoRouter.post('tipos_sanguineos', CreateTipoSanguineoController.handle);
tipoSanguineoRouter.get('tipos_sanguineos', GetAllTipoSanguineoController.handle);
tipoSanguineoRouter.get('tipos_sanguineos', GetByIdTipoSanguineoController.handle);
tipoSanguineoRouter.put('tipos_sanguineos', UpdateTipoSanguineoController.handle);

export { tipoSanguineoRouter };