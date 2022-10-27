import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetByIdIndicadorController{

    async handle(request: Request, response: Response){
        const { id } = request.params;

        const indicador = await prismaClient.indicador.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                nome: true,
                tipo: true,
                valor: true,
                created_at: true,
                bolsa: true
            }

        });

        console.log(indicador);
        return response.json(indicador);
    }
}