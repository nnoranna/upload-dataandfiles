const express = require("express");
const fileupload = require("express-fileupload")
const path = require("path");
const app = express(); // express is egy föggvény és ez lefut, és objektum jön vissza

function getFunction(requiest, response){
    response.sendFile(path.join(`${__dirname}/../frontend/index.html`));
}

app.use(fileupload());



app.get("/", getFunction);
app.use("/upload", express.static(`${__dirname}/../frontend/upload`));
app.use("/public", express.static(`${__dirname}/../frontend/public`));

const port = 9000;
const ipAddress = `http://127.0.0.1:${port}`;
app.listen(port, () => {
    console.log(ipAddress)
});