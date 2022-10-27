import { Acao } from '.prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class CreateAcaoController {

    async handle(request: Request, response: Response){

        const { id, nome, descricao, ativo_id } = request.body;

        const acao = await prismaClient.acao.create({
            data: {
                id,
                nome,
                descricao,
                ativo: {
                    connect: {
                        id : parseInt(ativo_id)
                    }
                }
            }
        });

        console.log(acao);
        return response.json(acao);
    }
}
