import axios from "axios";
import React, { useEffect, useState } from "react";

function Lista() {
    const [moeda, setMoeda] = useState([]);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setMoeda(res.data)
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return <>
        <div className="list-color container">
            {moeda.map(coin => (
                <div className="list-flex" >
                <ul>
                    <li>Moeda: {coin.name} </li>
                    <li>Valor: {coin.current_price} </li>
                </ul>
                </div>
            ))}
        </div>

    </>
}
export default Lista;

