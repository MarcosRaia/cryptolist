import React, {useState, useEffect} from "react";
import NavBar from "./navBar";
import CurrencyRow from "./CurrencyRow/CurrencyRow";
function Conversor() {
    
    return <>
        <NavBar />
        <div className="conv-container container">
            <div>
                <h2>Conversor</h2>
            </div>
            <div>
            <CurrencyRow />
            <div>=</div>
            <CurrencyRow />
            </div>
        </div>
        
    </>
}

export default Conversor;