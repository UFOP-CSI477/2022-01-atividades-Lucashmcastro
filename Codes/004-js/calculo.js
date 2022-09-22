function validar(campo){

    let n = campo.value;

    if ( n.length == 0 || isNaN (parseFloat(n)) ) {

        window.alert("Erro. Informe um número válido!");
        campo.value = "";
        campo.focus();
        return false;
    }

    return true;
}

function calcular(){

    let n01 = document.dados.valor01;
    let n02 = document.dados.valor02;

    if (validar(n01) && validar(n02)){

        let resultado = parseFloat(n01.value) + parseFloat(n02.value);
        document.dados.resultado.value = resultado;
    } 
}