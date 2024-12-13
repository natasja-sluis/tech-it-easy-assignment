// Opdracht 1c: Hoeveel tv's heeft Tech It Easy in totaal ingekocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.

export default function calculateStock(inventory) {
    let currentStock = 0;

    for (let i = 0; i < inventory.length; i++) {
        currentStock = currentStock + inventory[i].originalStock;
    }

    return currentStock;
}