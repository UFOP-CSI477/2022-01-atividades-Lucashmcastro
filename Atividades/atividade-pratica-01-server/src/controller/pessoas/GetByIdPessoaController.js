import { prismaClient } from '../../database/client.js';

export class GetByIdPessoaController{

    async handle( request, response){

        const { id } = request.params;

        const pessoa = await prismaClient.pessoa.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: {
                nome: true,
                rua: true,
                numero: true,
                complemento: true,
                documento: true,
                created_at: true,
                cidade: true,
                tipoSanguineo: true
            }
        });

        console.log(pessoa);
        return response.json(pessoa);
    }
}