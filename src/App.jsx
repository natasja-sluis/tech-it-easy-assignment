import './App.css';

import {inventory} from "./constants/inventory.js";
import {bestSellingTv} from "./constants/inventory.js";

import calculateSales from '/src/helpers/tv-sales.js';
import calculateStock from "./helpers/stock.js";
import calculateSalesGoals from "./helpers/sales-goals.js";
import generateBestsellerName from "./helpers/generate-bestseller-name.js";
import generatePrice from "./helpers/generate-price.js";
import generateScreenSize from "./helpers/generate-screen-size.js";

function App() {
    const sales = calculateSales(inventory)
    const stock = calculateStock(inventory)
    const salesGoal = calculateSalesGoals(inventory);
    const nameBestseller = generateBestsellerName(bestSellingTv);
    const price = generatePrice(bestSellingTv);
    const availableScreenSizes = generateScreenSize(bestSellingTv);

    function handleClick() {
        console.log("button clicked!");
    }

    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <div className="row">
                <p className="dashboard tv-sales">Current Sales: {sales}</p>
                <p className="dashboard stock">Current Stock: {stock}</p>
                <p className="dashboard salesGoal">Current Sales Goal: {salesGoal}</p>
            </div>
            <h2>Best verkochte tv</h2>
            <article className="best-selling-tv-container">
                <img className="best-selling-tv-image" src={bestSellingTv.sourceImg} alt="tv"/>
                <div className="best-selling-tv-details">
                    <p className="name-best-selling-tv">{nameBestseller}</p>
                    <p className="price-best-selling-tv">{price}</p>
                    <p className="screen-best-selling-tv">{availableScreenSizes}</p>
                    <p><img className="icons" src="/src/assets/check.png" alt="check-icon"/> wifi <img className="icons"
                                                                                                       src="/src/assets/minus.png"
                                                                                                       alt="minus-icon"/> speech
                        <img className="icons" src="/src/assets/check.png" alt="check-icon"/> hdr
                        <img className="icons" src="/src/assets/minus.png" alt="minus-icon"/> bluetooth <img
                            className="icons" src="/src/assets/minus.png" alt="minus-icon"/> ambilight </p>
                </div>
            </article>
            <article className="sort-tvs-container">
                <h2>Alle tvs</h2>
                <div className="sort-button-section">
                <button className="sort-button" type="button" onClick={handleClick}>Meest verkocht eerst</button>
                <button className="sort-button" type="button" onClick={handleClick}>Goedkoopste eerst</button>
                <button className="sort-button" type="button" onClick={handleClick}>Meest geschikt voor sport eerst
                </button>
                </div>
            </article>
        </>
    )
}

export default App
