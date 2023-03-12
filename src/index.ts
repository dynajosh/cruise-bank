import express, {Express, Request, Response} from 'express';

const app:Express = express();

app.get('/', (req:Request, res:Response)=>{
    res.send('Typescript and Express')
})

app.listen(4321, ()=>{
    console.log("running on 4321")
})