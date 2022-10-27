import { Ativo } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetByIdAcaoController{

    async handle(request: Request, response: Response){

        const { id } = request.params;

        const acao = await prismaClient.acao.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                nome: true,
                descricao: true,
                created_at: true,
                ativo: true
            }

        });

        console.log(acao);
        return response.json(acao);
    }
}