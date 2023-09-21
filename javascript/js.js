let boton1 = document.getElementById('boton1');
let texto1 = document.getElementById('text1');

let boton2 = document.getElementById('boton_blanco');
let texto2 = document.getElementById('text2');

let boton3 = document.getElementById('boton3');
let texto3 = document.getElementById('text3');

window.onload = function (){
    texto1.style.display='none';
    boton1.onclick = seguirLey1;
    
    texto2.style.display='none';
    boton2.onclick = seguirLey2;
    
    texto3.style.display='none';
    boton3.onclick = seguirLey3;
}

function seguirLey1() {
    texto1.style.display="block";
}

function seguirLey2() {
    texto2.style.display="block";
}

function seguirLey3() {
    texto3.style.display="block";
}