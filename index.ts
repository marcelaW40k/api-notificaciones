import { consumerMqNotifications } from "./src/infrastructure/server-consumidor";
import { createServerExpress } from "./src/infrastructure/server.express";

//imprimir la variables de entorno  
console.log(process.env)

//createServerExpress();
consumerMqNotifications();