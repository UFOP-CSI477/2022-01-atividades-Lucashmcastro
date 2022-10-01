import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";
import { PessoaModel } from "../../model/pessoas/PessoaModel.js";

export class DeletePessoaController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);
        console.log(request.body);
        const pessoaModel = new PessoaModel();
        if (! (await pessoaModel.exists(id))) {
            console.log(`[DeletePessoaController] Pessoa id: ${id} does not exist!`);
            return response.status(403).json({ 
                message: `[DeletePessoaController] Pessoa id: ${id} does not exist! (model check)`
            });            
        }

        try{
            const pessoa = await prismaClient.pessoa.delete({
                where: {
                    id: id
                }
            });

            return response.json(pessoa);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeletePessoaController] Pessoa id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "Pessoa id does not exist."
                    });

                }
        }
    }
}