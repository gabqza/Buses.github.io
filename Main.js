function calculo() {
    let tipo = document.querySelector("#tipo").value;
    let personas = parseInt(document.querySelector("#personas").value);
    let km = parseFloat(document.querySelector("#km").value); 

    let precio = 0; 
    let costo_total = 0;
    let costo_persona = 0;

    if (tipo === "a" && personas > 20 ) {
        precio = 2.0;
        costo_total = precio * km ;
        costo_persona = costo_total / personas;
    } else {
       precio = 2.0 
       costo_total = precio * km ;
       costo_persona = costo_total / 20 
    } 

    if (tipo === "b" && personas > 20 ) {
        precio = 2.5;
        costo_total = precio * km ;
        costo_persona = costo_total / personas;
    } else {
       precio = 2.5 
       costo_total = precio * km ;
       costo_persona = costo_total / 20 
    } 

    if (tipo === "c" && personas > 20 ) {
        precio = 3;
        costo_total = precio * km ;
        costo_persona = costo_total / personas;
    } else {
       precio = 3 
       costo_total = precio * km ;
       costo_persona = costo_total / 20 
    } 

    document.querySelector("#costoto").innerHTML = ` El costo total del viaje es de ${costo_total}`
    document.querySelector("#costoper").innerHTML = ` El costo total por persona  es de ${costo_persona}`
    
}
document.querySelector("button").addEventListener("click" , calculo )
