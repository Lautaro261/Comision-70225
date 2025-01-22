import express from 'express';
import { router as sessionsRouter } from './routes/sessionsRouter.js';
import { router as fakerRouter } from './routes/fakerRouter.js';

import cookieParser from "cookie-parser"
import mongoose from 'mongoose';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.use('/api/sessions', sessionsRouter)

app.use('/test', fakerRouter)



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/comision-70255')
    console.log('DB online...!!!')
} catch (error) {
    console.log(`Error de conexión a BD: ${error.message}`)
}


//Documentación: https://www.artillery.io/docs/reference/cli/run