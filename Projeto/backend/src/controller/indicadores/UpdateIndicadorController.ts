import { Indicador } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class UpdateIndicadorController {
    async handle(request: Request, response: Response){      
        const { id, nome, tipo, valor, bolsa_id } = request.body;

        const indicador = await prismaClient.indicador.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                tipo,
                valor,
                bolsa: {
                    connect: {
                        id: parseInt(bolsa_id)
                    }
                }
            }
        });

        return response.json(indicador);
    }
}