let montoDinero =+prompt('Ingrese un monto ENTERO positivo: S/.');

//Evaluacion de monto (ADUANAS)
while(isNaN(montoDinero)==true || montoDinero<0 || montoDinero-(Math.trunc(montoDinero))!=0){
    if(isNaN(montoDinero)){
        montoDinero = noNumber(montoDinero);
    }else if(montoDinero<0){
        montoDinero = positividad(montoDinero);
    }else if(montoDinero-(Math.trunc(montoDinero))!=0){
        montoDinero = sacarDecimal(montoDinero);
    }
}

function noNumber(numero){
    while(isNaN(numero)){
        alert('El valor ingresado no es válido, intente nuevamente');
        numero = +prompt('Ingrese un monto ENTERO: S/.','ejemplo: 1578');
    }
    return numero
}
function positividad(negativo){
    while(negativo<0){
        alert('El valor ingresado no es POSITIVO, intente nuevamente');
        negativo = +prompt('Ingrese un monto ENTERO: S/.','ejemplo: 1578');
    }
    return negativo
}
function sacarDecimal(numero){
    alert('ADVERTENCIA: '+numero+' no es un número entero, por lo tanto solo se extrerá la parte entera');
    numero = Math.trunc(numero);
    return numero
}

//declaracion del resto de variables
let montoRestante = montoDinero;
let totalBilletes = 0;
let billetes = { //Valores temporales de variables
    b200: 200,
    b100: 100,
    b50: 50,
    b20: 20,
    b10: 10,
}

for(i in billetes){
    let valorBillete = (billetes[i]==200)? 200:(billetes[i]==100)? 100:(billetes[i]==50)? 50:(billetes[i]==20)?20:10;
    billetes[i] = numeroBilletes(montoRestante,valorBillete);
    montoRestante = montoRestante - (billetes[i]*valorBillete);
    totalBilletes = totalBilletes + billetes[i];
}

function numeroBilletes(monto,tipoBillete){
    let billete = Math.trunc(monto/tipoBillete);
    return billete;
}

document.getElementById('total').innerHTML = montoDinero;
document.getElementById('_200').innerHTML = billetes.b200;
document.getElementById('_100').innerHTML = billetes.b100;
document.getElementById('_50').innerHTML = billetes.b50;
document.getElementById('_20').innerHTML = billetes.b20;
document.getElementById('_10').innerHTML = billetes.b10;
document.getElementById('totalBilletes').innerHTML = totalBilletes;
document.getElementById('sobrante').innerHTML = montoRestante;