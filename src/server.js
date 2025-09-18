import 'dotenv/config';
import app from './app';
import { MongoClient } from 'mongodb';

let server;
const port = 5000;

const uri = "mongodb+srv://simpleCRUD:simpleCRUD@cluster0.cckud.mongodb.net/simpleCrud?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function main() {
    try {

        await client.connect();
        console.log("Connect to MongoDB");

        server = app.listen(port, () => {
            console.log(`Simple CRUD Server is Running on port ${port}`)
        })

    } catch (error) {
        console.log(error);
    }

}

main();