import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";
import { DoacaoModel } from "../../model/doacoes/DoacaoModel.js";

export class DeleteDoacaoController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);
        console.log(request.body);
        const doacaoModel = new DoacaoModel();
        if (! (await doacaoModel.exists(id))) {
            console.log(`[DeleteDoacaoController] Doacao id: ${id} does not exist!`);
            return response.status(403).json({ 
                message: `[DeleteDoacaoController] Doacao id: ${id} does not exist! (model check)`
            });            
        }

        try{
            const doacao = await prismaClient.doacao.delete({
                where: {
                    id: id
                }
            });

            return response.json(doacao);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeleteDoacaoController] Doacao id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "Doacao id does not exist."
                    });
                }
        }
    }
}