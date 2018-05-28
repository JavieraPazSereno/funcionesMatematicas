function add(valor1, valor2) 
{
    return valor1 + valor2 
}

function multiply(valor1, valor2)
{
    return valor1 * valor2
}

function operacion ()
{   
    let total= multiply(36325,add(9824,777));
    let resultado = document.getElementById("resultado");
    resultado.textContent = "El resultado es " + total;
    return total;
}





