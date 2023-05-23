import http from 'http';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
var app = express();

const uri = "mongodb+srv://root:root@cluster0.wdypow2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('Cinéma-films');
    const collection = db.collection('films');

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);

app.get('/', function(req, res) {
  res.send('Film-microservice');
});

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Film-microservice running.');
});


server.listen(port, hostname, () => {
  console.log(`Server Film-microservice running at http://${hostname}:${port}/`);
});