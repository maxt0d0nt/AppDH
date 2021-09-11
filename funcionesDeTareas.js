let fs = require ("fs");
let tareas = fs.readFileSync ("./tareas.json"); // llama al archivo json, OJO UTF-8

let arrayTareas = JSON.parse(tareas); //lo guarda en una variable como un array, si usamos utf-8 antes no es necesario usar esto

let suiche = function abc(){

    switch(process.argv[2]){
        case "listar":
            console.log ();
            console.log ("Lista de Tareas");
            console.log ("=====================");
            arrayTareas.forEach(function (task){
                console.log ();
                console.log(task.titulo + " " + "=>" + " " +task.estado);
            });
         console.log ("=====================");
            break;
    
            case "crear":
                 console.log ();
                         
            
            break;
    
        case undefined:
            console.log ();
            console.log("Atencion! - Tienes que pasar una accion!");
            console.log ();
            break;

        default:
            console.log ();
            console.log("No entiendo que quisiste decir");
            console.log ();
    
    }
    }
 suiche();
   
module.exports = suiche;
