const ticketpriceHtml = document.getElementById('ticketprice');

// chiedere km da percorrere
let km = prompt('Gentile cliente, quanti km devi percorrere?');
console.log(km + '--> km da percorrere');

// chiedere età
let age = prompt('quanti anni hai?');
age = parseInt(age);


// definire prezzo /km di 0.21 euro
let euroKm = 0.21;

let priceTotkm = km * euroKm;
console.log(priceTotkm + '--> prezzo in base ai km');


//sconto 20% per minorenni
let discount20 = priceTotkm * 0.20;
console.log(discount20 + '--> sconto 20%');

// sconto 40% per over 65
let discount40 = priceTotkm * 0.40;
console.log(discount40 + '--> sconto 40%');

// applico decimali con .toFixed(2)

if ( age < 18) {
    ticketpriceHtml.innerHTML = 'il costo del biglietto è di euro' + ' ' + (priceTotkm.toFixed(2) - discount20.toFixed(2) ) + ' ' + '(ti è stato applicato uno sconto del 20%)';
    
} else if ( age >= 65) {
    ticketpriceHtml.innerHTML = 'il costo del biglietto è di euro' + ' ' + (priceTotkm.toFixed(2) - discount40.toFixed(2)) + ' ' + '(ti è stato applicato uno sconto del 40%)';
    
} else {
    ticketpriceHtml.innerHTML = 'il costo del biglietto è di euro' + ' ' + priceTotkm.toFixed(2);
}

