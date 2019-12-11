import React, { useEffect, useState } from 'react';

export default ({ ticker }) => {
    const [companyInfoDisplay, setcompanyInfoDisplay] = useState({});
    useEffect(() => {
        fetch(`https://api-v2.intrinio.com/companies/${ticker}?api_key=OjBhNjdiMzZhZTczZmMzM2ZjN2MxMzA5OTM4NDA1NGJi`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load info');
                }
                return response.json();
            })
            .then(company => {
                setcompanyInfoDisplay(
                    {
                        name: company.name,
                        description: company.short_description,
                        website: company.company_url
                    }
                )
            })
    });

    return (
        <div>
            <h2>{companyInfoDisplay.name} - {ticker}</h2>
            <div >{companyInfoDisplay.description}</div>
            <a href="${companyInfoDisplay.website}">click to view website</a>
        </div>
    );
}