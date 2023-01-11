
function calculadora(num) {

    let numero = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = numero + num;


}

function clr() {

    document.getElementById("result").innerHTML = "";
}

function dlt() {

    let result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length - 1)
}

function calcular() {
    let result = document.getElementById("result").innerHTML;
    if (result) {
        document.getElementById("result").innerHTML = eval(result)
    }
}




