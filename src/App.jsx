import './App.css';

import {inventory} from "./constants/inventory.js";
import {bestSellingTv} from "./constants/inventory.js";

import calculateSales from '/src/helpers/tv-sales.js';
import calculateStock from "./helpers/stock.js";
import calculateSalesGoals from "./helpers/sales-goals.js";
import generateBestsellerName from "./helpers/generate-bestseller-name.js";
import generatePrice from "./helpers/generate-price.js";
import generateScreenSize from "./helpers/generate-screen-size.js";
import getBiggestScreenSize from "./helpers/getBiggestScreenSize.js";

function App() {
    const sales = calculateSales(inventory)
    const stock = calculateStock(inventory)
    const salesGoal = calculateSalesGoals(inventory);
    const nameBestseller = generateBestsellerName(bestSellingTv);
    const priceBestseller = generatePrice(bestSellingTv);
    const availableScreenSizesBestseller = generateScreenSize(bestSellingTv);


    function handleSortMostSold() {
        const mostSoldTv = inventory.sort((a, b) => b.sold - a.sold);

        return console.log(mostSoldTv);
    }

    function handleSortCheapestFirst() {
        const cheapestTv = inventory.sort((a, b) => a.price - b.price);

        return console.log(cheapestTv);

    }

    function handleSortSuitableSports() {
        const mostSuitableForSports = inventory.sort((a, b) => b.refreshRate - a.refreshRate);

        return console.log(mostSuitableForSports);

    }

    function handleSortBiggestScreenFirst() {

        const biggestScreen = inventory.sort((a, b) => {
            return getBiggestScreenSize(b.availableSizes) - getBiggestScreenSize(a.availableSizes)
        })

        console.log(biggestScreen);

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
            <article className="overview-tv-container">
                <div className="tv-image-container">
                    <img className="tv-image" src={bestSellingTv.sourceImg} alt="tv"/>
                </div>
                <div className="tv-details">
                    <p className="name-tv">{nameBestseller}</p>
                    <p className="price-tv">{priceBestseller}</p>
                    <p className="screen-tv">{availableScreenSizesBestseller}</p>
                    <p><img className="icon" src="/src/assets/check.png" alt="check-icon"/> wifi <img className="icon"
                                                                                                      src="/src/assets/minus.png"
                                                                                                      alt="minus-icon"/> speech
                        <img className="icon" src="/src/assets/check.png" alt="check-icon"/> hdr
                        <img className="icon" src="/src/assets/minus.png" alt="minus-icon"/> bluetooth <img
                            className="icon" src="/src/assets/minus.png" alt="minus-icon"/> ambilight </p>
                </div>
            </article>
            <article className="sort-tvs-container">
                <h2>Alle tvs</h2>
                <ul className="brand-name-list">
                    {inventory.map((inventory) => {
                        return <li key={inventory.type}>{inventory.brand}</li>
                    })}
                </ul>
                <div className="sort-button-section">
                    <button className="sort-button" type="button" onClick={handleSortMostSold}>Meest verkocht eerst
                    </button>
                    <button className="sort-button" type="button" onClick={handleSortCheapestFirst}>Goedkoopste eerst
                    </button>
                    <button className="sort-button" type="button" onClick={handleSortSuitableSports}>Meest geschikt voor
                        sport eerst
                    </button>
                    <button className="sort-button" type="button" onClick={handleSortBiggestScreenFirst}>Grootste
                        schermgroottes eerst
                    </button>
                </div>
            </article>
            {inventory.map((inventory) => {
                return <article key={inventory.type} className="overview-tv-container">
                    <div className="tv-image-container">
                        <img className="tv-image" src={inventory.sourceImg} alt="tv"/>
                    </div>
                    <div className="tv-details">
                        <p className="name-tv"> {generateBestsellerName(inventory)} </p>
                        <p className="price-tv">{generatePrice(inventory)}</p>
                        <p className="screen-tv">{generateScreenSize(inventory)}</p>

                        <ul className="options-list">
                            {inventory.options.map((option) => {
                                return <li key={option.name}> {option.applicable ?
                                    <img className="icon" src="/src/assets/check.png" alt="available"/> :
                                    <img className="icon" src="/src/assets/minus.png"
                                         alt="not available"/>} {option.name}</li>
                            })}
                        </ul>
                    </div>

                    <div className="tv-out-of-stock-container">
                        {inventory.originalStock - inventory.sold === 0 ?
                            <img className="out-of-stock-image" src="/src/assets/out-of-stock.png"
                                 alt="out of stock"/> : ''
                        }
                    </div>


                </article>
            })
            }
        </>
    )
}

export default App
