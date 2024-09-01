//importar libreria
const express = require("express");

//objetos para llamar los metodos de express

const app = express();

//ruta iniclia
app.get("/", function(req,res){
        res.send("Hola Estudiantes");
})


//cofigurar el puerto usado para el servidor local
app.listen(3000, function(){
    console.log("El servidor es http:\\localhost:3000");
})