import { Ativo, Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetAllAtivoController {


    async handle(request: Request, response: Response){

        const ativos = await prismaClient.ativo.findMany({
            select: {
                id: true,
                tipo: true,
                descricao: true,
                created_at:true,
                bolsa: true
            }
        });

        console.log(ativos);
        return response.json(ativos);

    }

}