import React from 'react';

export default ({ setTicker }) => {

    function handleSubmit(event) {
        event.preventDefault();
        const myInput = document.getElementById('companyInput');
        setTicker(myInput.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Company Ticker <input id="companyInput" /></label>
                <button >Get Stock Info</button>
            </form>
        </div>
    );
}