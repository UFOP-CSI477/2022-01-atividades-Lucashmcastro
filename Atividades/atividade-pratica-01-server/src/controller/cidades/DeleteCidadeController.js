import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";
import { CidadeModel } from "../../model/cidades/CidadeModel.js";

export class DeleteCidadeController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);
        console.log(request.body);
        const cidadeModel = new CidadeModel();
        if (! (await cidadeModel.exists(id))) {
            console.log(`[DeleteCidadeController] Cidade id: ${id} does not exist!`);
            return response.status(403).json({ 
                message: `[DeleteCidadeController] Cidade id: ${id} does not exist! (model check)`
            });            
        }

        try{
            const cidade = await prismaClient.cidade.delete({
                where: {
                    id: id
                }
            });

            return response.json(cidade);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeleteCidadeController] Cidade id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "Cidade id does not exist."
                    });

                }
        }
    }
}