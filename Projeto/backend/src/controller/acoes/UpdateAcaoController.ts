import { Acao } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class UpdateAcaoController {
    async handle(request: Request, response: Response){      
        
        const { id, nome, descricao, ativo_id } = request.body;

        const acao = await prismaClient.acao.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                descricao,
                ativo: {
                    connect: {
                        id: parseInt(ativo_id)
                    }
                }
            }
        });

        return response.json(acao);
    }
}