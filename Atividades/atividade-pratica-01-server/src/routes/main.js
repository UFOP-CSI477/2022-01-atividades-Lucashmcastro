import { Router } from 'express';

const mainRouter = Router();

mainRouter.get('/', (request, response) => {
    response.json({
        message: "O servidor estar rodando com sucesso."
    })
});

export { mainRouter }