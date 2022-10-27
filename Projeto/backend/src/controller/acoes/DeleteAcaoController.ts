import { Acao } from "@prisma/client";
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class DeleteAcaoController {

    async handle(request: Request, response: Response){

        const { id } = request.params;

        try {
            const acao = await prismaClient.acao.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(acao);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}