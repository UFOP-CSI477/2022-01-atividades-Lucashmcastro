import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetAllEmpresaController {

    async handle(request: Request, response: Response){
        const empresas = await prismaClient.empresa.findMany({
            select: {
                id: true,
                nome: true,
                setor: true,
                sigla: true,
                bolsa: true,
                created_at:true
            }
        });

        console.log(empresas);
        return response.json(empresas);

    }

}