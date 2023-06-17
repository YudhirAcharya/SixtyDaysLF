const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.listen(3000, () => {
  console.log("app is listening");
});
app.get("/", (req, res) => {
  res.json({
    name: "yudhir",
  });
});
app.get("/about", (req, res) => {
  res.json({
    about: "from kupondole",
  });
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});
