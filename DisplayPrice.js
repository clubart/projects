import React, { useEffect, useState } from 'react';

export default ({ ticker }) => {
    const [priceDisplay, setPriceDisplay] = useState({});
    useEffect(() => {
        fetch(`https://api-v2.intrinio.com/securities/${ticker}/prices/realtime?api_key=OjBhNjdiMzZhZTczZmMzM2ZjN2MxMzA5OTM4NDA1NGJi`) 
        .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load price');
                }
                return response.json();
            })
            .then(company => {
                setPriceDisplay(
                    {
                        lastPrice: company.last_price,
                        lastUpdate: company.last_time
                    }
                )
            })
    },[priceDisplay]);

    return (
        <div >Price: ${priceDisplay.lastPrice} {priceDisplay.lastUpdate}</div>
    );
}