import { PrismaClientKnownRequestError } from '@prisma/client/runtime/index.js';
import { prismaClient } from '../../database/client.js';
import { TipoSanguineoModel } from '../../model/tipos_sanguineos/TipoSanguineoModel.js';

export class DeleteTipoSanguineoController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);
        console.log(request.body);
        const tipoSanguineoModel = new TipoSanguineoModel();
        if (! (await tipoSanguineoModel.exists(id))) {
            console.log(`[DeleteTipoSanguineoController] Tipo Sanguineo id: ${id} does not exist!`);
            return response.status(403).json({ 
                message: `[DeleteTipoSanguineoController] Tipo Sanguineo id: ${id} does not exist! (model check)`
            });            
        }

        try{
            const tipoSanguineo = await prismaClient.tipoSanguineo.delete({
                where: {
                    id: id
                }
            });

            return response.json(tipoSanguineo);           

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeleteTipoSanguineoController] Tipo Sanguineo id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "Tipo Sanguineo id does not exist."
                    });

                }
        }
    }
}