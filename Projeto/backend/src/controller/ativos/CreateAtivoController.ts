import { Ativo } from '.prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class CreateAtivoController {

    async handle(request: Request, response: Response){

        const { id, tipo, descricao, bolsa_id } = request.body;

        const ativo = await prismaClient.ativo.create({
            data: {
                id,
                tipo,
                descricao,
                bolsa: {
                    connect: {
                        id : parseInt(bolsa_id)
                    }
                }
            }
        });

        console.log(ativo);
        return response.json(ativo);
    }
}
