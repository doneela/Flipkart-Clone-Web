import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ecommerce-web-shard-00-00.xbm3q.mongodb.net:27017,ecommerce-web-shard-00-01.xbm3q.mongodb.net:27017,ecommerce-web-shard-00-02.xbm3q.mongodb.net:27017/?ssl=true&replicaSet=atlas-rqcold-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting with the database', error.message); 
    }
}
export default Connection;
