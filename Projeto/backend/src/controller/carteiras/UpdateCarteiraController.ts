import { Carteira } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class UpdateCarteiraController {
    async handle(request: Request, response: Response){      
        const { id, nome, cpf, status, ativo_id } = request.body;

        const carteira = await prismaClient.carteira.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                cpf,
                status,
                ativo: {
                    connect: {
                        id: parseInt(ativo_id)    
                    }               
                }
            }
        });

        return response.json(carteira);
    }
}