import { Empresa } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class UpdateEmpresaController {
    async handle(request: Request, response: Response){      
        const { id, nome, setor, sigla, bolsa_id } = request.body;

        const empresa = await prismaClient.empresa.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                setor,
                sigla,
                bolsa: {
                    connect: {
                        id: parseInt(bolsa_id)
                    }
                }
            }
        });

        return response.json(empresa);
    }
}