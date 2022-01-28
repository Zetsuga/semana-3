let arrayPersonas=[];
let arrayBusqueda=[];
let texto = "";

function recogerDatos(){
    let nombre = (document.getElementById("nombre").value).toLowerCase();
    let origen = (document.getElementById("origen").value).toLowerCase();
    let destino = (document.getElementById("destino").value).toLowerCase();
    let personas = document.getElementById("persona").value;
    let fecha = document.getElementById("fecha").value;
    let usuario ={
        "nombre" : nombre,
        "origen" : origen,
        "destino" : destino,
        "personas" : personas,
        "fecha" : fecha
    }

    arrayPersonas.push(usuario);

    document.getElementById("nombre").value = "";
    document.getElementById("origen").value = "";
    document.getElementById("destino").value = "";
    document.getElementById("persona").value = 0;
    document.getElementById("fecha").value = "";
}

function filtrarDatos(){
    arrayBusqueda=[];
    let busqueda  = document.getElementById("busqueda");
    let resultado  = document.getElementById("resultado");
    let datos =arrayPersonas.filter(dest=>{
        for(let atributo in dest){
            if(atributo =="destino" && (dest[atributo] == "mallorca"  || dest[atributo] == "canaria"  || 
            dest[atributo] == "galicia"  )){
                arrayBusqueda.push(dest);
            }
        }
    });

    texto="";
    if(arrayBusqueda.length>0){
        busqueda.innerHTML= '<input class="contenido__filtrar__busqueda__input" id="campoBusqueda" type="text" placeholder="Escribe para filtra" onkeyup="filtrar()">';
        resultado.innerHTML = pintarUsuarios(arrayBusqueda);;
    }else{
        texto+= "<h3>No hay ninguna coincidencia para mostrar</h3>";
        resultado.innerHTML = texto;
    }
    //console.log(datos);
}

function filtrar(){
    let campoBusqueda = document.getElementById("campoBusqueda");
    let resultado  = document.getElementById("resultado");

    let filtro = arrayBusqueda.filter(persona =>{
        for(let atributo in persona){
            if(atributo == "nombre" && persona["nombre"].includes((campoBusqueda.value).toLowerCase())){
                return persona;
            }
        } 
        
    });
    //console.log(filtro);
    resultado.innerHTML = pintarUsuarios(filtro);
}

function pintarUsuarios(arrayUsuarios){
    texto="";
    for(i=0; i<arrayUsuarios.length;i++){
        texto+= `<h3>Usuario ${[i]}</h3><ul>`;
        for(let atributo in arrayUsuarios[i]){
            texto+=`<li>${atributo} :${arrayUsuarios[i][atributo]}</li>`;
        }
        texto+=`</ul>`;
    }
    return texto;
}