import { Bolsa } from '.prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";


export class CreateBolsaController {

    async handle(request: Request, response: Response){
        const { id, nome, origem, status } = request.body;

        const bolsa = await prismaClient.bolsa.create({
            data: {
                id,
                nome,
                origem,
                status
            }
        });

        console.log(bolsa);
        return response.json(bolsa);
    }
}
