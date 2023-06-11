import express from 'express';
import fs from 'fs';

const app = express();
const port = 6500;

app.get('/',(req,res)=>{
    res.status(200).send('WELCOME');
})

app.get('/allMovies',(req,res)=>{
    // bookmyshow
    // now showing
    // response - sample 
    // component <- mocekd object

    fs.readFile('db.json',(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(JSON.parse(data));
    })
})

app.get('/movies/:name',(req,res)=>{
    let fileName = req.params.name + '.json'
    fs.readFile(fileName,(err,data)=>{
        if(err){
            console.log(err);
        }
        res.send(JSON.parse(data));
    })
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})