const express = require('express');
const app = express();
app.use(express.json());

const port = 4000;

app.post('/login',async(req,res) => {
    try {
        console.log(req.body);
        res.send("Hello World!");
    } catch (e) {
        console.log(e);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})