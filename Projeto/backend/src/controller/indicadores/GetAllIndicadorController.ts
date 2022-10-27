import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetAllIndicadorController {

    async handle(request: Request, response: Response){
        const indicadores = await prismaClient.indicador.findMany({
            select: {
                id: true,
                nome: true,
                tipo: true,
                valor: true,
                bolsa: true,
                created_at:true
            }
        });

        console.log(indicadores);
        return response.json(indicadores);

    }

}