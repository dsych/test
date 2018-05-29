const express = require("express");
var app = express();

app.get("/test", function(req, res) {
    res.send(JSON.stringify({ res: "Hello world!" }));
});

app.listen(1111);
