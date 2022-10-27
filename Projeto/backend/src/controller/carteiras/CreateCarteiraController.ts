import { Carteira } from '.prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class CreateCarteiraController {

    async handle(request: Request, response: Response){
        const { id, nome, cpf, status, ativo_id } = request.body;

        const carteira = await prismaClient.carteira.create({
            data: {
                id,
                nome,
                cpf,
                status,
                ativo: {
                    connect: {
                        id : parseInt(ativo_id)
                    }
                }
            }
        });

        console.log(carteira);
        return response.json(carteira);
    }
}
