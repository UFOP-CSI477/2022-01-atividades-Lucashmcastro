import { prismaClient } from '../../database/client.js';

export class GetByIdBolsaController{

    async handle( request: { params: { id: any; }; }, response: { json: (arg0: { id: number; created_at: Date; nome: string; origem: string; status: string; } | null) => any; }){

        const { id } = request.params;

        const bolsa = await prismaClient.bolsa.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                nome: true,
                origem: true,
                status: true,
                created_at: true
            }

        });

        console.log(bolsa);
        return response.json(bolsa);
    }
}