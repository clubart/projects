import React, { useState } from 'react';

export default ({ setTicker }) => {
    const [companyListDisplay, setCompanyListDisplay] = useState({});
    function handleSubmit(event) {
        event.preventDefault();
        const myInput = document.getElementById('companyInput');
        setTicker(myInput.value);
    }
    function getList() {
        fetch('https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=OjBhNjdiMzZhZTczZmMzM2ZjN2MxMzA5OTM4NDA1NGJi')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load price');
                }
                return response.json();
            })
            .then(companies => {
                setCompanyListDisplay(companies);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Company Ticker <input id="companyInput" /></label>
                <button >Get Stock Info</button>
                <a href="#" onClick={getList}>click to see full list of companies</a>
            </form>
        </div>
    );
}