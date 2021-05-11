
let lista = [];
const pantalla = document.getElementById('pantalla')
const operacion = document.getElementById('operacion')

let listagetname = [];
listagetname = document.getElementsByName("boton");

for (i=0; i<listagetname.length; i++){
    if (listagetname[i].id == "clean"){
        listagetname[i].addEventListener("click", function(){clean()})
    }
    else if (listagetname[i].id == "igual"){
        listagetname[i].addEventListener("click", function(){igual()})
    }
    else if (listagetname[i].id == "sum"){
        listagetname[i].addEventListener("click", function(){sum()})
    }
    else if (listagetname[i].id == "rest"){
        listagetname[i].addEventListener("click", function(){rest()})
    }
    else if (listagetname[i].id == "mult"){
        listagetname[i].addEventListener("click", function(){mult()})
    }
    else if (listagetname[i].id == "div"){
        listagetname[i].addEventListener("click", function(){div()})
    }
    else {
    let p = listagetname[i].innerHTML
    listagetname[i].addEventListener("click", function(){mostrar(p)})
    }
}


function mostrar(h){
    pantalla.innerHTML = pantalla.innerHTML + h;
    operacion.innerHTML = operacion.innerHTML + h;
}

function clean(){
    lista = [];
    pantalla.style.color = "rgb(0, 0, 0)";
    pantalla.innerHTML = "";
    operacion.innerHTML = "";
}

function sum() {
    pantalla.style.color = "rgb(0, 0, 0)";
    if (pantalla.innerHTML !== ""){
    lista.push(pantalla.innerHTML);
    lista.push("+");
    pantalla.innerHTML = "";
    operacion.innerHTML = operacion.innerHTML + "+";
    }
}

function rest() {
    pantalla.style.color = "rgb(0, 0, 0)";
    if (pantalla.innerHTML !== ""){
    lista.push(pantalla.innerHTML);
    lista.push("-");
    pantalla.innerHTML = "";
    operacion.innerHTML = operacion.innerHTML + "-";
    }
}

function mult() {
    pantalla.style.color = "rgb(0, 0, 0)";
    if (pantalla.innerHTML !== ""){
    lista.push(pantalla.innerHTML);
    lista.push("*");
    pantalla.innerHTML = "";
    operacion.innerHTML = operacion.innerHTML + "x";
    }
}

function div() {
    pantalla.style.color = "rgb(0, 0, 0)";
    if (pantalla.innerHTML !== ""){
    lista.push(pantalla.innerHTML);
    lista.push("/");
    pantalla.innerHTML = "";
    operacion.innerHTML = operacion.innerHTML + "/";
    }
}

function igual(){
    lista.push(pantalla.innerHTML);
    for (i=0; i<=lista.length; i++){
        if (lista[i]=="*") {
            let resultmult = lista[i-1] * lista[i+1];
            lista.splice(i-1, 1, resultmult);
            lista.splice(i, 2);
            i=i-1;
        }
    }
    for (d=0; d<=lista.length; d++){
        if (lista[d]=="/") {
            let resultdiv = lista[d-1]/lista[d+1];
            lista.splice(d-1, 1, resultdiv);
            lista.splice(d, 2);
            d=d-1;
        }
    }
    for (m=0; m<=lista.length; m++){
        if (lista[m]=="+") {
            let resultsum = Number(lista[m-1])+Number(lista[m+1]);
            lista.splice(m-1, 1, resultsum);
            lista.splice(m, 2);
            m=m-1;
        }
    }
    for (e=0; e<=lista.length; e++){
        if (lista[e]=="-") {
            let resultsum = Number(lista[e-1])-Number(lista[e+1]);
            lista.splice(e-1, 1, resultsum);
            lista.splice(e, 2);
            e=e-1;
        }
    }
    pantalla.style.color = "orange";
    pantalla.innerHTML = lista[0];
    operacion.innerHTML = pantalla.innerHTML;
    lista = [];
}

const hola
