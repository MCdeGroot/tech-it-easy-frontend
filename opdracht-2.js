// * **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let tvItemsSold = 0;

for (let i = 0; i < inventory.length; i++) {
    tvItemsSold += inventory[i].sold;
}

console.log(tvItemsSold);


// * **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.

const itemsSoldContainer = document.getElementById('items-sold');
itemsSoldContainer.textContent = tvItemsSold;

// * **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
//   console.
let originalStock = 0;

for (let i = 0; i < inventory.length; i++) {
    originalStock += inventory[i].originalStock;
}
console.log(originalStock);

// * **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
const originalStockContainer = document.getElementById('items-bought');
originalStockContainer.textContent = originalStock;


// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.
let currentStock = originalStock - tvItemsSold;

console.log(currentStock);

const currentStockContainer = document.getElementById('current-stock');
currentStockContainer.textContent = currentStock;
