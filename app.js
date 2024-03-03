const fs = require("node:fs/promises");
const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something broke!");
  }
});

app.get("/about", (req, res) => {
  try {
    res.sendFile(__dirname + "/about.html");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something broke!");
  }
});

app.get("/contact-me", (req, res) => {
  try {
    res.sendFile(__dirname + "/contact-me.html");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something broke!");
  }
});

app.use((req, res) => {
  try {
    res.sendFile(__dirname + "/404.html");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something broke!");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/*app.get("/", async (req, res) => {
  try {
    const data = await fs.readFile("./index.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something broke!");
  }
});

app.get("/about", async (req, res) => {
  try {
    const data = await fs.readFile("./about.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something broke!");
  }
});

app.get("/contact-me", async (req, res) => {
  try {
    const data = await fs.readFile("./contact-me.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something broke!");
  }
});

app.use(async (req, res) => {
  try {
    const data = await fs.readFile("./404.html", "utf-8");
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something broke!");
  }
});*/
