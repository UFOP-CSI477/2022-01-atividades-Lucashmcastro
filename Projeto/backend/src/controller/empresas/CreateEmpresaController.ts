import { Empresa } from '.prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class CreateEmpresaController {

    async handle(request: Request, response: Response){
        const { id, nome, setor, sigla, bolsa_id } = request.body;

        const empresa = await prismaClient.empresa.create({
            data: {
                id,
                nome,
                setor,
                sigla,
                bolsa: {
                    connect: {
                        id : parseInt(bolsa_id)
                    }
                }
            }
        });

        console.log(empresa);
        return response.json(empresa);
    }
}
