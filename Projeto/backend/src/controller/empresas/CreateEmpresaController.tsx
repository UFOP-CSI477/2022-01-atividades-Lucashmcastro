import { Empresa } from '.prisma/client';
import { prismaClient } from '../../database/client.js';

export class CreateEmpresaController {

    async handle ( request: { body: { id: any; nome: any; setor: any; sigla: any; bolsa_id: any; }; }, response: { json: (arg0: Empresa) => any; }) {

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
