//* **Opdracht 4a:** Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.
//

function getTV(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

// * **Opdracht 4b:** Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals `379` of `159`) teruggeeft in het format `€379,-` of `€159,-`.
//

function renamePrice(price){
    return `€${price},-`;
}


// * **Opdracht 4c:** Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
//   etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
//   schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`. _Let op:_ om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//

//PseudoCode
// 1. maak functie available sizes
// 2. gespriekt in de uitwerkingen, maar je moest er dus vanuit gaan dat de array aangeleverd wordt.
// 3. maken een for loop die alle inches omrekend naar cm's en deze achter elkaar plakt.


function availableSizes(tvSizesArray) {
    let stringOutput = '';
    for (let i = 0; i < tvSizesArray.length; i++) {
        const inches = tvSizesArray[i];
        const cms = inches * 2.54;

        stringOutput += `${inches} inch (${cms} cm) | `;

    }
    return stringOutput;
}

console.log(availableSizes([5, 6, 7]));

// * **Opdracht 4d:** Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//   ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```
//

// PSEUDOCODE
// anchor element maken in de html
// getElemnt
// innerHTML overschrijven

const singleProduct = document.getElementById('product');
singleProduct.innerHTML = `
   <h4>${getTV(inventory[4])} </h4>
   <h4>${renamePrice(inventory[4].price)} </h4>
   <h4>${availableSizes(inventory[4].availableSizes)} </h4>
`;




// * **Opdracht 4e:** Maak een herbruikbare functie die de informatie van **alle** tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function tvProductList(tvArray) {

    const availableProducts = inventory.map((tvs) => {
        return `
<li>
   <h4>${getTV(tvs)} </h4>
   <h4>${renamePrice(tvs.price)} </h4>
   <h4>${availableSizes(tvs.availableSizes)} </h4>
</li>`;
    })

    const productList = document.getElementById('all-models')
    productList.innerHTML = `${availableProducts}`

}

tvProductList(inventory);