import mongoose from "mongoose";

const Connection=  async (username = 'root', password = 'root') =>{
    const URL = `mongodb+srv://root:${password}@cluster0.vgabj1x.mongodb.net/?retryWrites=true&w=majority`;

    try {

        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected successfully');
    
    } catch (error) {
        console.log('Error while connecting with database');
    }
}

export default Connection;


