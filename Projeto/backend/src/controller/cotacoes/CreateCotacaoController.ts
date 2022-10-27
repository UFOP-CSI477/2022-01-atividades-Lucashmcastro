import { Cotacao } from '.prisma/client';
import { prismaClient } from '../../database/client';
import { getDateBR } from '../../util/GetDateBR';
import { Request, Response } from "express";

export class CreateCotacaoController {

    async handle(request: Request, response: Response){
        const { id, valor, date, empresa_id, bolsa_id } = request.body;

        const cotacao = await prismaClient.cotacao.create({
            data: {
                id,
                valor,
                date: getDateBR(date),
                empresa: {
                    connect: {
                        id : parseInt(empresa_id)
                    }
                },
                bolsa: {
                    connect: {
                        id : parseInt(bolsa_id)
                    }
                }
            }
        });

        console.log(cotacao);
        return response.json(cotacao);
    }
}
