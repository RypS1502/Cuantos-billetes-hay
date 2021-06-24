let montoDinero = +prompt('Ingrese un monto: S/.');
let montoRestante = montoDinero;
let totalBilletes = 0;
let billetes = {
    b200: 200,
    b100: 100,
    b50: 50,
    b20: 20,
    b10: 10,
}
//Recorrera el objeto billetes
for(i in billetes){
    let valorBillete = (billetes[i]==200)? 200:(billetes[i]==100)? 100:(billetes[i]==50)? 50:(billetes[i]==20)?20:10;
    billetes[i] = numeroBilletes(montoRestante,valorBillete);
    montoRestante = montoRestante - (billetes[i]*valorBillete);
    totalBilletes = totalBilletes + billetes[i];
}

function numeroBilletes(monto,tipoBillete){
    let billetes = Math.trunc(monto/tipoBillete);
    return billetes;
}

function dineroRestante(monto, billete, tipoBillete){
    let resto = monto - (billete*tipoBillete);
    return resto;
}

document.getElementById('total').innerHTML = montoDinero
document.getElementById('_200').innerHTML = billetes.b200
document.getElementById('_100').innerHTML = billetes.b100
document.getElementById('_50').innerHTML = billetes.b50
document.getElementById('_20').innerHTML = billetes.b20
document.getElementById('_10').innerHTML = billetes.b10
document.getElementById('totalBilletes').innerHTML = totalBilletes
document.getElementById('sobrante').innerHTML = montoRestante
