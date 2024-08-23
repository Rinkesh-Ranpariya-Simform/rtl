const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

// CORS for react app, assuming port 3000
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// use middleware to serve static images
app.use(express.static("public"));

// read data from options file
const optionsRaw = fs.readFileSync("./options.json", "utf-8");
const options = JSON.parse(optionsRaw);

app.get("/scoops", (req, res) => {
  // return data from file
  res.json(options.iceCreamFlavors);
});

app.get("/toppings", (req, res) => {
  // return data from file
  res.json(options.toppings);
});

app.post("/order", (req, res) => {
  // create a random order number
  const orderNumber = Math.floor(Math.random() * 10000000000);

  res.status(201).json({ orderNumber });
});

if (require.main === module) {
  app.listen(3030, () => console.log("server listening on port 3030!"));
}

module.exports = app;
