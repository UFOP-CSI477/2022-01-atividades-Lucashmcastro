import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetAllBolsaController {


    async handle(request: Request, response: Response){
        const bolsas = await prismaClient.bolsa.findMany({
            select: {
                id: true,
                nome: true,
                origem: true,
                status: true,
                created_at:true
            }
        });

        console.log(bolsas);
        return response.json(bolsas);

    }

}