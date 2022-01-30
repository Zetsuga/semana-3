let colores =["rojo","azul","amarillo","verde"];
let simon = [];
let juego = [];
let loop =1000;
let espera =1000;
let ronda = 0;

function iluminarRojo(){
    let rojo = document.getElementById("rojo");
    rojo.className="colores__rojo";
    setTimeout(function(){
        rojo.className="colores__rojo--oscuro";    
    },700)
}

function iluminarAzul(){
    let azul = document.getElementById("azul");
    azul.className="colores__azul";
    setTimeout(function(){
        azul.className="colores__azul--oscuro";    
    },700)
}

function iluminarVerde(){
    let verde = document.getElementById("verde");
    verde.className="colores__verde";
    setTimeout(function(){
        verde.className="colores__verde--oscuro";    
    },700)
}

function iluminarAmarillo(){
    let amarillo = document.getElementById("amarillo");
    amarillo.className="colores__amarillo";
    setTimeout(function(){
        amarillo.className="colores__amarillo--oscuro";    
    },700)
}

function iluminar(valor){
    switch(valor){
        case "rojo":
            iluminarRojo();
            break;
        case "azul":
            iluminarAzul();
            break;
        case "verde":
            iluminarVerde();
            break;
        case "amarillo":
            iluminarAmarillo();
            break;
    }
}

function evaluar(valor){
    iluminar(valor);
    juego.push(valor);
    for(let i=0;i<juego.length;i++){
        if(juego[i]!=simon[i]){
            finDelJuego();
        }else if(i==simon.length-1){
            siguienteNivel();
        }
    }
}

function siguienteNivel(){
    alert("Genial, vamos a subir el nivel");
    let letrero = document.getElementById("puesto");
    letrero.innerHTML=`Ronda número ${ronda}`;
    letrero.className = "puesto__texto";
    ronda++;

    let cantidadSimon = simon.length +1;
    simon = [];
    for(i=0;i<cantidadSimon;i++){
        simon.push(colores[Math.floor(Math.random()*4)]);
    }

    for(let i=0;i<simon.length;i++){
        setTimeout(() => {
            console.log(simon[i]);
            iluminar(simon[i]);
        }, espera*(i+1));
    }

    juego = [];
}

function finDelJuego(){
    simon = [];
    juego = [];
    alert("Has fallado, empieza de cero");
    let rojo = document.getElementById("rojo");
    let amarillo = document.getElementById("amarillo");
    let azul = document.getElementById("azul");
    let verde = document.getElementById("verde");

    rojo.removeAttribute("onclick");
    amarillo.removeAttribute("onclick");
    azul.removeAttribute("onclick");
    verde.removeAttribute("onclick");

}

function reseteo(){
    let rojo = document.getElementById("rojo");
    let amarillo = document.getElementById("amarillo");
    let azul = document.getElementById("azul");
    let verde = document.getElementById("verde");
    let letrero = document.getElementById("puesto");

    rojo.removeAttribute("onclick");
    amarillo.removeAttribute("onclick");
    azul.removeAttribute("onclick");
    verde.removeAttribute("onclick");
    letrero.innerHTML = "";
}

function reset(){
    let rojo = document.getElementById("rojo");
    let amarillo = document.getElementById("amarillo");
    let azul = document.getElementById("azul");
    let verde = document.getElementById("verde");

    rojo.setAttribute("onclick","evaluar('rojo')");
    amarillo.setAttribute("onclick","evaluar('amarillo')");
    azul.setAttribute("onclick","evaluar('azul')");
    verde.setAttribute("onclick","evaluar('verde')");
}

function nuevoJuego(){
    let letrero = document.getElementById("puesto");
    ronda = 0;
    letrero.innerHTML=`Ronda número ${ronda}`;
    letrero.className = "puesto__texto";
    ronda++;
    simon = [];
    reset();
    for(i=0;i<3;i++){
        simon.push(colores[Math.floor(Math.random()*4)]);
    }

    for(let i=0;i<simon.length;i++){
        setTimeout(() => {
            console.log(simon[i]);
            iluminar(simon[i]);
        }, espera*(i+1));
    }
}
