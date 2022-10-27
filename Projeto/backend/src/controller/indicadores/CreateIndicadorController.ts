import { Indicador } from '.prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class CreateIndicadorController {

    async handle(request: Request, response: Response){
        const { id, nome, tipo, valor, bolsa_id } = request.body;

        const indicador = await prismaClient.indicador.create({
            data: {
                id,
                nome,
                tipo,
                valor,
                bolsa: {
                    connect: {
                        id : parseInt(bolsa_id)
                    }
                }
            }
        });

        console.log(indicador);
        return response.json(indicador);
    }
}
