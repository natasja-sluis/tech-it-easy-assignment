import './App.css';
import calculateSales from '/src/helpers/tv-sales.js';
import {inventory} from "./constants/inventory.js";

function App() {
    const sales = calculateSales(inventory)

    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <p className="tv-sales">{ sales }</p>
        </>
    )
}

export default App
