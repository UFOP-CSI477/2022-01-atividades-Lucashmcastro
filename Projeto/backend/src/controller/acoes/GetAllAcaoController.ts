import { Ativo } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetAllAcaoController {

    async handle(request: Request, response: Response){

        const acoes = await prismaClient.acao.findMany({
            select: {
                id: true,
                nome: true,
                descricao: true,
                created_at:true,
                ativo: true
            }
        });

        console.log(acoes);
        return response.json(acoes);

    }

}