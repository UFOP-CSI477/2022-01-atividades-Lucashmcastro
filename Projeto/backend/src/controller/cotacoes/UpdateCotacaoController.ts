import { Cotacao } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { getDateBR } from '../../util/GetDateBR';
import { Request, Response } from "express";

export class UpdateCotacaoController {
    async handle(request: Request, response: Response){      
        const { id, valor, date, empresa_id, bolsa_id } = request.body;

        const cotacao = await prismaClient.cotacao.update({

            where: {
                id: parseInt(id)
            },
            data: {
                date: getDateBR(date),
                valor,
                empresa: {
                    connect: {
                        id: parseInt(empresa_id)
                    }
                },
                bolsa: {
                    connect: {
                        id: parseInt(bolsa_id)
                    }
                }
            }
        });

        return response.json(cotacao);
    }
}