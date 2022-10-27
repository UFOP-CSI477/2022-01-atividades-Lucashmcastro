import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetByIdEmpresaController{

    async handle(request: Request, response: Response){
        const { id } = request.params;

        const empresa = await prismaClient.empresa.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                nome: true,
                setor: true,
                sigla: true,
                created_at: true,
                bolsa: true
            }

        });

        console.log(empresa);
        return response.json(empresa);
    }
}