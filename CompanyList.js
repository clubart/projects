import React from 'react';
import CompanyInput from './CompanyInput';

export default  ({companyListDisplay}) => {

    return(
        <ul>
            {companyListDisplay.map((company, index) =><li key={index}>name:{company.name }ticker:{company.ticker}</li> )}
        </ul>
    );
}