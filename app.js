const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const Member = require("./db/db");
const memberRouter = require("./routers/members")

app.use(express.urlencoded());

app.use(express.json());

app.use(memberRouter);

app.listen(port, () => {
    console.log(`listning to the port : ${port}`)
});
