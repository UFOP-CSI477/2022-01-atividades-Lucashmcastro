import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client.js'

export class GetAllEmpresaController {


    async handle(request: any, response: { json: (arg0: { id: number; nome: string; setor: string; sigla: string; bolsa: Bolsa; created_at: Date; }[]) => any; }) {

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