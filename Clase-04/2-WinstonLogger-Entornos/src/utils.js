import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from "winston"
import { config } from './config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

//Definimos el transporte por consola
const transporteConsola=new winston.transports.Console({
    level: "debug",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(), 
        winston.format.simple()
    )
})

//Fefinimos nuestro logger
export const logger=winston.createLogger(
    {
        transports: [
            new winston.transports.File({
                filename: "./src/logs/error.log", 
                level: "error",
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.prettyPrint()
                )
            })
        ]
    }
)

if(config.MODE=="development"){
    logger.add(transporteConsola)
}

logger.error("Prueba log nivel error")
logger.http("Prueba log nivel http")