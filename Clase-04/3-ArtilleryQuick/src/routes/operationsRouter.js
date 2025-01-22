import { Router } from 'express';

export const router = Router()


router.get("/operacionsimple", (req, res) => {
    let suma = 0; 
    for (let i = 0; i < 1000000; i++) {
        suma += i; 
    }
    res.send({suma}); 
})


router.get("/operacioncompleja", (req, res) => {
    let suma = 0; 
    for(let i = 0; i < 8e8; i++) {
        suma += i; 
    }
    res.send({suma}); 
})

