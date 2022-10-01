import UserController from "./src/controller/UserController";

async function main(){
    const userController = new UserController();

    const user = await userController.create({
        name: "Lucas",
        email: "test@mail.com",
    });

    console.log(user);
}