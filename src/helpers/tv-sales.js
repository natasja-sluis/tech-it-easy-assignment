// Opdracht 1a: Hoeveel tv's zijn er al verkocht? Schrijf een helper functie die dit berekent. Log de uitkomst in de console.

export default function calculateSales(inventory) {
    let sales = 0;

    for (let i = 0; i < inventory.length; i++) {
        sales = sales + inventory[i].sold;
    }

    return sales;
}
