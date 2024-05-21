import './App.css';
import calculateSales from '/src/helpers/tv-sales.js';
import {inventory} from "./constants/inventory.js";
import calculateStock from "./helpers/stock.js";
import calculateSalesGoals from "./helpers/sales-goals.js";

function App() {
    const sales = calculateSales(inventory)
    const stock = calculateStock(inventory)
    const salesGoal = calculateSalesGoals(inventory);

    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <p className="dashboard tv-sales">{ sales }</p>
            <p className="dashboard stock">{ stock }</p>
            <p className="dashboard salesGoal">{ salesGoal }</p>
        </>
    )
}

export default App
