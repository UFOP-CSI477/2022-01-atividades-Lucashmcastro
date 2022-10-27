import { Router } from 'express';
import { CreateCarteiraController } from '../controller/carteiras/CreateCarteiraController';
import { GetAllCarteiraController } from '../controller/carteiras/GetAllCarteiraController';
import { GetByIdCarteiraController } from '../controller/carteiras/GetByIdCarteiraController';
import { UpdateCarteiraController } from '../controller/carteiras/UpdateCarteiraController';
import { DeleteCarteiraController } from '../controller/carteiras/DeleteCarteiraController';

const carteiraRouter = Router();
const createCarteiraController = new CreateCarteiraController();
const getAllCarteiraController = new GetAllCarteiraController();
const getByIdCarteiraController = new GetByIdCarteiraController();
const updateCarteiraController = new UpdateCarteiraController();
const deleteCarteiraController = new DeleteCarteiraController();

carteiraRouter.post('/carteiras', createCarteiraController.handle);
carteiraRouter.get('/carteiras', getAllCarteiraController.handle);
carteiraRouter.get('/carteiras/:id', getByIdCarteiraController.handle);
carteiraRouter.put('/carteiras', updateCarteiraController.handle);
carteiraRouter.delete('/carteiras/:id', deleteCarteiraController.handle);

export { carteiraRouter };