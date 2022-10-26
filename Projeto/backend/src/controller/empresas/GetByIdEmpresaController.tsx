import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client.js';

export class GetByIdEmpresaController{

    async handle( request: { params: { id: any; }; }, response: { json: (arg0: { id: number; nome: string; setor: string; sigla: string; created_at: Date; bolsa: Bolsa; } | null) => any; }){

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