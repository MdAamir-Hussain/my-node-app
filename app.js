//app.js
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// serve static files form the 'public' directory

app.use(express.static(path.join(__dirname, "public")));

//route for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

//route for about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

//route for contact

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

//start the server

app.listen(port, () => {
  console.log(`server running at http://localhost: ${port}`);
});
