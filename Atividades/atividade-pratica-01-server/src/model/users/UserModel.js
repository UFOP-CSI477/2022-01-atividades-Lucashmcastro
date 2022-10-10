import { prismaClient } from '../../database/client.js';

export class UserModel {

    async exists(id) {

        const userCount = await prismaClient.user.count({
            where: {
                id: id
            }
        });

        console.log(`[UserModel] exists().count = ${userCount} (${userCount > 0})`);

        return userCount > 0;
    }
}