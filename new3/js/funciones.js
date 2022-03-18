function crearTablaAmigos(){

    var objeto_tabla = document.createElement("table");
    objeto_tabla.className="tabla";

    var contenedor = document.getElementById("contenedor_amigos");
    contenedor.appendChild(objeto_tabla);
    

    for(i=0; i < amigos.length; i++){
        var objeto_tr = document.createElement("tr");

        var contenedor_tabla = document.getElementsByClassName("tabla")[0];
        contenedor_tabla.appendChild(objeto_tr);
        
        var objeto_td = document.createElement("td");
        var objeto_td2 = document.createElement("td");
        objeto_tr.appendChild(objeto_td);
        objeto_tr.appendChild(objeto_td2);
        
        objeto_td.innerHTML=amigos[i].nombre;
        objeto_td2.innerHTML=amigos[i].apellido;
    }
}


/*var amigos=[{nombre:"Pepe", apellido:"Pérez"},
 {nombre:"Elena", apellido:"Nito"},
 {nombre:"Dolores", apellido:"Fuertes"}];*/
