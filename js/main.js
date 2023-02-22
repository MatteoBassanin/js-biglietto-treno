const kiloMetri = parseInt(prompt("Quanti km devi percorrere?"));

console.log(kiloMetri);

const eta = parseInt(prompt("Quanti anni hai ?"));

console.log(eta);

let baseTicketCost = kiloMetri * 0.21;

console.log(baseTicketCost);

let newTicketcost;


if (eta <= 18){
    newTicketcost = baseTicketCost - (baseTicketCost * 20 / 100);   
}else if (eta >= 65){
    newTicketcost = baseTicketCost - (baseTicketCost * 40 / 100);   
}
else{
    newTicketcost = baseTicketCost;
}

newTicketcost = newTicketcost.toFixed(2);

document.getElementById("cost_ticket").innerHTML = "Il costo del tuo biglietto è di " + newTicketcost ;
