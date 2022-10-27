import { Ativo } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class UpdateAtivoController {

    async handle(request: Request, response: Response){   

        const { id, tipo, descricao, bolsa_id } = request.body;

        const ativo = await prismaClient.ativo.update({

            where: {
                id: parseInt(id)
            },
            data: {
                tipo,
                descricao,
                bolsa: {
                    connect: {
                        id: parseInt(bolsa_id)
                    }
                }
            }
        });

        return response.json(ativo);
    }
}