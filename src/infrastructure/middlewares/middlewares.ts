import express from "express";

const middleware404 = express();

middleware404.use((_, res, next) => {

  res.status(404).send({ok:false, message:"Ruta no encontrada"});
});

export default middleware404;