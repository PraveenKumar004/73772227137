const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

var arr = [] ;

app.post('/', (req, res) => {
    const {url}= req.body;
    let size = arr.size;
    var short = `http://localhost:5000/${size}`;
    const data ={
        fullurl: url,
        validity:30,
        shorturl:short
    }
    arr.push(data);
    console.log(url);
    res.send("Successfully saved");
});

app.get('/', (req, res) => {
    res.send(arr);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});