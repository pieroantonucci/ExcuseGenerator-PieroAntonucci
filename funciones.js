let quien = ['Mi perro', 'Mi mamá', 'Mi hermano chico', 'Mi pulpo','El viejo de la esquina'];
let que = ['se comio mi tarea', 'se enfermó', 'justo no tenía con quien qudarse', 'se ahogo', 'falleció'];
let cuando = ['justo antes de la clase','y no me pudo llevar','y lo tuve que cuidar yo','antes de la prueba','justo cuando iba para allá'];

function generadorExcusas (){
var numeroMentira = Math.floor(Math.random()*5+0);
var excusaGenerada = quien[numeroMentira] + ' ' + que[numeroMentira] + ' ' + cuando[numeroMentira];
document.getElementById("excuse").innerHTML = excusaGenerada;
}