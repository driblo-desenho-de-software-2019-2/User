const express = require("express");

// Constants
const PORT = 8001;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("User\n");
});

app.listen(PORT, HOST);
