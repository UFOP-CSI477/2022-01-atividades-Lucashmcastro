import { prismaClient } from '../../database/client.js'

export class GetAllBolsaController {


    async handle(request: any, response: { json: (arg0: { id: number; nome: string; origem: string; status: string; created_at: Date; }[]) => any; }) {

        const bolsas = await prismaClient.bolsa.findMany({
            select: {
                id: true,
                nome: true,
                origem: true,
                status: true,
                created_at:true
            }
        });

        console.log(bolsas);
        return response.json(bolsas);

    }

}