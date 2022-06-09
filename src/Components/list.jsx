import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/style.css"
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
                <ul className="list-item collection">
                    <li className="collection-item avatar">
                        <img style={{width:"30px", height:"30px"}} src={coin.image} alt="" className="circle" />
                            <span className="title"> {coin.name} </span>
                            <p>US$ {coin.current_price} <br /> </p>
                            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                    

                </ul>
                // <div className="list-flex" >
                // <ul>
                //     <li>Moeda: {coin.name} </li>
                //     <li>Valor: {coin.current_price} </li>
                // </ul>
                // </div>
            ))}
        </div>

    </>
}
export default Lista;

