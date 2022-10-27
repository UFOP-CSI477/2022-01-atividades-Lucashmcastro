import { Router } from 'express';

const mainRouter = Router();

mainRouter.get('/', (request: any, response: { json: (arg0: { message: string; }) => void; }) => {
    response.json({
        message: "O servidor estar rodando com sucesso."
    })
});

export { mainRouter }