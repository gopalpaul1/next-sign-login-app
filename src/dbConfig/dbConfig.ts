import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB Connect successfully!");
        })

        connection.on('error', (err) => {
            console.log("Mongoo connection error, please make sure MongoDB is running " + err)
            process.exit();
        })

    } catch(error){
        console.log('Something goes wrong!');
        console.log(error);

    }
}