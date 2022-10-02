import UserController from './controller/UserController';
import HouseController from './controller/HouseController';
import BookingController from './controller/BookingController';


async function main(){
    const userController = new UserController();
    const houseController = new HouseController();
    const bookingController = new BookingController();

    // const user = await userController.create({
    //     name: "Lucas",
    //     email: "test@mail.com",
    // });

    // const house = await houseController.create({
    //     title: "Studio Completo com Escritório",
    //     description: "Studio com Cozinha",
    // });

    // const booking = await bookingController.create({
    //     startDate: new Date(),
    //     endDate: new Date("2022-10-02"),
    //     houseId: "ca21820b-ba8b-4a53-8fec-baa72d8f63dd",
    //     userId: "f9e9942c-2ded-4e22-8c6f-0f71956e510d",
    // });
   
    const bookings = await bookingController.findAll();

    console.log(bookings);

}

main();