import React from 'react'

export default function CurrencyRow() {
    return (
        <div>
            <div className="input-field col s12">
                <select defaultValue={'DEFAULT'} >
                    <option value="DEFAULT" disabled>Choose a salutation ...</option>
                    <option value="1">Mr</option>
                    <option value="2">Mrs</option>
                    <option value="3">Ms</option>
                    <option value="4">Miss</option>
                    <option value="5">Dr</option>
                </select>
                <label>Materialize Select</label>
            </div>
        </div>
    )
}
