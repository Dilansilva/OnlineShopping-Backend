const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());

const port = 4000;

app.post('/login' , async(req,res) => {//route for login Page
    try {
        console.log(req.body);  
        const msg = 'sds';
       
        if(msg == "Valid"){
            res.send({Valid:'Loggedin'});
        }
    } catch (e) {
        console.log(e);
    }
});

app.get('/enterEmail', async(req,res) => {//route for Enter Email Page
    try {
        console.log('Workde!');
        
    } catch (e) {
        console.log(e);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})