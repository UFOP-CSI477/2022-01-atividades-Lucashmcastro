import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetByIdBolsaController{

    async handle(request: Request, response: Response){
        const { id } = request.params;

        const bolsa = await prismaClient.bolsa.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                nome: true,
                origem: true,
                status: true,
                created_at: true
            }

        });

        console.log(bolsa);
        return response.json(bolsa);
    }
}