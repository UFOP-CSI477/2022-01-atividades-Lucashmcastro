import { Cotacao } from "@prisma/client";
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class DeleteCotacaoController {

    async handle(request: Request, response: Response){
        const { id } = request.params;

        try {
            const cotacao = await prismaClient.cotacao.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(cotacao);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}