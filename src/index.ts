import express,{ Application, Request, Response , NextFunction } from 'express';
const app:Application = express();


const add = (a:number,b:number) => a + b;
app.get('/', (req:Request,res:Response,next:NextFunction) => { 
    console.log(add(5,5));
    console.log('Hello World');
    
    res.send('Hello');
})

app.listen(5000, () => console.log('Server Running'));