const http = require("node:http"); //or import * as http from "http";
const fs = require("node:fs/promises"); //or import * as fs from "fs";
const { URL } = require("url");

const server = http.createServer(async (req, res) => {
  //const myURL = new URL(`${req.url}`);
  let filePath = req.url === "/" ? "./index.html" : `.${req.url}.html`;
  let data;

  try {
    data = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": "text/html" });
  } catch (err) {
    console.log(err);
    data = await fs.readFile("./404.html");
    res.writeHead(404, { "Content-Type": "text/html" });
  }

  res.write(data);
  res.end();
  console.log(req.url);
});

server.listen(8080);

/*
http
  .createServer(async (req, res) => {
    const fileName = req.url === "/" ? `./index.html` : `.${req.url}.html`;
    let data;

    try {
      data = await fs.readFile(fileName);
      res.writeHead(200, { "Content-Type": "text/html" });
    } catch (err) {
      data = await fs.readFile("./404.html");
      res.writeHead(404, { "Content-Type": "text/html" });
    }
    res.write(data); // write response to client
    return res.end(); // end response
  })
  .listen(8080); // server object listens on port 8080
*/

/*

const { MongoClient } = require("mongoDB");

User;
const { MongoClient } = require("mongoDB");

async function run() {
  try {
    const client = new MongoClient("string_connect", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db("Base_Données");

    const result = await db
      .collection("products")
      .insertOne({ item: "lol", price: 2 });
  } catch (error) {
    console.log(error);
  }
}

run()*/
