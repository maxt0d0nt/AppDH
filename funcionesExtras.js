function Crear(titulo, estado){
    this.titulo = titulo;
    this.estado = estado;
}
let taske = new Crear(process.argv[3],process.argv[4]);


console.log(taske);

module.export = taske;