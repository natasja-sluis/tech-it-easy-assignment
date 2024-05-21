// Opdracht 1e: Schrijf een helperfunctie die berekent hoeveel tv's er nog verkocht moeten worden. Geef de uitkomst in het rood weer op de pagina. Tip: je kunt een helperfunctie gebruiken in een andere helperfunctie.

import calculateSales from '/src/helpers/tv-sales.js';
import calculateStock from "/src/helpers/stock.js";

export default function calculateSalesGoals(inventory) {
    const currentSales = calculateSales(inventory);
    const currentStock = calculateStock(inventory);

    let currentSalesGoal = 0;

    for (let i = 0; i < inventory.length; i++) {
        currentSalesGoal = (currentStock - currentSales);
    }

    return currentSalesGoal;
}

