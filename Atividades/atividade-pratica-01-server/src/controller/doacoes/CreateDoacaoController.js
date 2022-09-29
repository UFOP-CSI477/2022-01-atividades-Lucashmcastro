import { response } from 'express';
import { request } from 'https';
import { prismaClient } from '../../database/client.js';

export class createDoacaoController {

    async handle (request, response){

        const { data, pessoa_id, local_id } = request.body;

        const doacao = await prismaClient.doacao({
            data: {
                data,
                pessoa: {
                    connect: {
                        id: pessoa_id
                    }
                }, 
                local: {
                    connect: {
                        id: local_id
                    }
                }
            }
        });

        console.log(doacao);
        return response.json(doacao);
    }
}