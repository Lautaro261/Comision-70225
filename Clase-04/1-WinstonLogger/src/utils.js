import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from 'winston';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;


// Implementamos logger con winston con los niveles por defecto. 
 export const logger = winston.createLogger(
    {
        // Definimos el transporte por consola
        transports:[
            new winston.transports.Console(
                {
                    level: "debug",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.colorize(),
                        winston.format.simple()
                    )
                }
            ),
        //Definimos el transporte por archivo
            new winston.transports.File(
                {
                    filename: "./src/logs/error.log",
                    level: "warn",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.json()
                    )
                }
            )
        ]
    }
) 

//con .log("nivel", "mensaje")
logger.log("silly", "prueba log de niveles")

//con los niveles .silly, .verbose, .warn, .error("mensaje")
logger.silly("prueba de nivel silly")
logger.verbose("prueba de log nivel verbose")
logger.warn("Prueba de log en archivo")
logger.error("Prueba de log en archivo")



// Implementamos logger con winston, ahora con niveles que nosotros definimos. 

const loggerPersonalizado = winston.createLogger(
    {
        levels: {grave: 0, error: 1, alert: 2, debug: 3},
        transports:[
            new winston.transports.Console({
                level:"debug",
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.colorize({
                        colors: {grave: "red", error: "red", alert: "yellow", debug: "blue"}
                    }),
                    winston.format.simple()
                )
            })
        ]
    }
)


loggerPersonalizado.alert("prueba de alerta")
loggerPersonalizado.grave("prueba de grave")
loggerPersonalizado.debug("prueba de debug")


//Nuestro middleware con logger 

export const middLogger = (req, res, next)=>{
    req.logger = logger
    next()
}





