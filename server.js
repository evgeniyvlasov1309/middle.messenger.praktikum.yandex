const path = require("path");
const express = require("express");
const history = require("express-history-api-fallback");

const app = express();

app.use(express.static(path.join(__dirname, "./dist")));
app.use(history("index.html", { root: path.join(__dirname, "./dist") } ));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
