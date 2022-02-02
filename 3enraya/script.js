let arrayJuego = [0,0,0,0,0,0,0,0,0];
//let posiciones =["zona11","zona12","zona13"]["zona21","zona22","zona23"]["zona31","zona32","zona33"];
let jugador ="jugador1";
let partida = 0;
let contador1 = 0;
let contador2 = 0;

function evaluar(posicion){
    let zona = document.getElementById(posicion)
    zona.innerHTML = "<h4 class='" + jugador + "'>X</h4>";
    zona.removeAttribute("onclick");
    if(jugador == "jugador1"){
        jugador = "jugador2";
        arrayJuego[posicion] =1;
    }else{
        jugador = "jugador1";
        arrayJuego[posicion] = 2
    }

    comprobarGanador();
    continuar();   
}

function comprobarGanador(){

    if(arrayJuego[0] == 1 && arrayJuego[1] == 1 && arrayJuego[2] == 1){
        ganador(1);
    }else if(arrayJuego[3] == 1 && arrayJuego[4] == 1 && arrayJuego[5] == 1){
        ganador(1);
    }else if(arrayJuego[6] == 1 && arrayJuego[7] == 1 && arrayJuego[8] == 1){
        ganador(1);
    }else if(arrayJuego[0] == 1 && arrayJuego[3] == 1 && arrayJuego[6] == 1){
        ganador(1);
    }else if(arrayJuego[1] == 1 && arrayJuego[4] == 1 && arrayJuego[7] == 1){
        ganador(1);
    }else if(arrayJuego[2] == 1 && arrayJuego[5] == 1 && arrayJuego[8] == 1){
        ganador(1);
    }else if(arrayJuego[0] == 1 && arrayJuego[4] == 1 && arrayJuego[8] == 1){
        ganador(1);
    }else if(arrayJuego[2] == 1 && arrayJuego[4] == 1 && arrayJuego[6] == 1){
        ganador(1);
    }else if(arrayJuego[0] == 2 && arrayJuego[1] == 2 && arrayJuego[2] == 2){
        ganador(2);
    }else if(arrayJuego[3] == 2 && arrayJuego[4] == 2 && arrayJuego[5] == 2){
        ganador(2);
    }else if(arrayJuego[6] == 2 && arrayJuego[7] == 2 && arrayJuego[8] == 2){
        ganador(2);
    }else if(arrayJuego[0] == 2 && arrayJuego[3] == 2 && arrayJuego[6] == 2){
        ganador(2);
    }else if(arrayJuego[1] == 2 && arrayJuego[4] == 2 && arrayJuego[7] == 2){
        ganador(2);
    }else if(arrayJuego[2] == 2 && arrayJuego[5] == 2 && arrayJuego[8] == 2){
        ganador(2);
    }else if(arrayJuego[0] == 2 && arrayJuego[4] == 2 && arrayJuego[8] == 2){
        ganador(2);
    }else if(arrayJuego[2] == 2 && arrayJuego[4] == 2 && arrayJuego[6] == 2){
        ganador(2);
    }

}

function ganador(jugador){
    if(jugador == 1){
        alert("Enhorabuena Jugador 1, has ganado!");
        contador1++;
        jugador = "jugador2";
    }else{
        alert("Enhorabuena Jugador 2, has ganado!")
        contador2++;
        jugador = "jugador1";
    }
    partida++;
    bloquear();
}

function reset(){
    let jugador1 = document.getElementById("jugador1");
    let jugador2 = document.getElementById("jugador2");
    let contadorPartida = document.getElementById("contador");

    let zona0 = document.getElementById("0");
    let zona1 = document.getElementById("1");
    let zona2 = document.getElementById("2");
    let zona3 = document.getElementById("3");
    let zona4 = document.getElementById("4");
    let zona5 = document.getElementById("5");
    let zona6 = document.getElementById("6");
    let zona7 = document.getElementById("7");
    let zona8 = document.getElementById("8");

    partida = 0;
    contador1 = 0;
    contador2 = 0;

    jugador1.innerHTML = "Victorias ";
    jugador2.innerHTML = "Victorias ";
    contadorPartida.innerHTML = "Partidas jugadas ";

    zona0.innerHTML="";
    zona1.innerHTML="";
    zona2.innerHTML="";
    zona3.innerHTML="";
    zona4.innerHTML="";
    zona5.innerHTML="";
    zona6.innerHTML="";
    zona7.innerHTML="";
    zona8.innerHTML="";

    arrayJuego = [0,0,0,0,0,0,0,0,0];
}

function nuevoJuego(){
    let zona0 = document.getElementById("0");
    let zona1 = document.getElementById("1");
    let zona2 = document.getElementById("2");
    let zona3 = document.getElementById("3");
    let zona4 = document.getElementById("4");
    let zona5 = document.getElementById("5");
    let zona6 = document.getElementById("6");
    let zona7 = document.getElementById("7");
    let zona8 = document.getElementById("8");

    zona0.setAttribute("onclick","evaluar(0)");
    zona1.setAttribute("onclick","evaluar(1)");
    zona2.setAttribute("onclick","evaluar(2)");
    zona3.setAttribute("onclick","evaluar(3)");
    zona4.setAttribute("onclick","evaluar(4)");
    zona5.setAttribute("onclick","evaluar(5)");
    zona6.setAttribute("onclick","evaluar(6)");
    zona7.setAttribute("onclick","evaluar(7)");
    zona8.setAttribute("onclick","evaluar(8)");

    let jugador1 = document.getElementById("jugador1");
    let jugador2 = document.getElementById("jugador2");
    let contadorPartida = document.getElementById("contador");

    jugador1.innerHTML = "Victorias " + contador1;
    jugador2.innerHTML = "Victorias " + contador2;
    contadorPartida.innerHTML = "Partidas jugadas " + partida;

    zona0.innerHTML="";
    zona1.innerHTML="";
    zona2.innerHTML="";
    zona3.innerHTML="";
    zona4.innerHTML="";
    zona5.innerHTML="";
    zona6.innerHTML="";
    zona7.innerHTML="";
    zona8.innerHTML="";

    arrayJuego = [0,0,0,0,0,0,0,0,0];
}

function bloquear(){
    let zona0 = document.getElementById("0");
    let zona1 = document.getElementById("1");
    let zona2 = document.getElementById("2");
    let zona3 = document.getElementById("3");
    let zona4 = document.getElementById("4");
    let zona5 = document.getElementById("5");
    let zona6 = document.getElementById("6");
    let zona7 = document.getElementById("7");
    let zona8 = document.getElementById("8");

    zona0.removeAttribute("onclick");
    zona1.removeAttribute("onclick");
    zona2.removeAttribute("onclick");
    zona3.removeAttribute("onclick");
    zona4.removeAttribute("onclick");
    zona5.removeAttribute("onclick");
    zona6.removeAttribute("onclick");
    zona7.removeAttribute("onclick");
    zona8.removeAttribute("onclick");
}

function continuar(){
    let terminado = true;
    for(i=0;i<arrayJuego.length;i++){
        if(arrayJuego[i] == 0){
            terminado = false;
        }
    }

    if(terminado){
        alert("Tenemos un empate.");
        partida++;
        bloquear()
    }
}