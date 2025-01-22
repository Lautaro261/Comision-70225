
import express from 'express';
import { router as operationsRouter } from './routes/operationsRouter.js';



const PORT= 3001;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", operationsRouter);


const server=app.listen(PORT,()=>{
     console.log(`Server escuchando en puerto ${PORT}`);
});
