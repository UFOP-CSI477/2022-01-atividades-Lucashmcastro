import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";
import { LocalColetaModel } from "../../model/locais_coleta/LocalColetaModel.js";

export class DeleteLocalColetaController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);
        console.log(request.body);
        const localColetaModel = new LocalColetaModel();
        if (! (await localColetaModel.exists(id))) {
            console.log(`[DeleteLocalColetaController] Local Coleta id: ${id} does not exist!`);
            return response.status(403).json({ 
                message: `[DeleteLocalColetaController] Local Coleta id: ${id} does not exist! (model check)`
            });            
        }

        try{
            const localColeta = await prismaClient.localColeta.delete({
                where: {
                    id: id
                }
            });

            return response.json(localColeta);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeleteLocalColetaController] Local Coleta id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "Local Coleta id does not exist."
                    });

                }
        }
    }
}