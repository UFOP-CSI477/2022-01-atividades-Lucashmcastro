import { Empresa, Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetAllCotacaoController {

    async handle(request: Request, response: Response){
        const cotacoes = await prismaClient.cotacao.findMany({
            select: {
                id: true,
                valor: true,
                date: true,
                empresa: true,
                bolsa: true,
                created_at:true
            }
        });

        console.log(cotacoes);
        return response.json(cotacoes);

    }

}