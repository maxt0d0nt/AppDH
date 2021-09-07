let fs = require ("fs");
let tareas = fs.readFileSync ("./tareas.json"); // llama al archivo json, OJO UTF-8

let arrayTareas = JSON.parse(tareas); //lo guarda en una variable como un array, si usamos utf-8 antes no es necesario usar esto

//console.log(arrayTareas);

//console.log (process.argv)

switch(process.argv[2]){
    case "listar":
        for (i= 0; i<arrayTareas.length; i++){
            console.log(arrayTareas[i]);
        }
     console.log ("=====================");
        break;

    case undefined:
        console.log("Atencion! - Tienes que pasar una accion!");
        break;

    default:
        console.log("No entiendo que quisiste decir");

}