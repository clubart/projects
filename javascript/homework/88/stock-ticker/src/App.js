import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import CompanyInput from './CompanyInput';
import DisplayPrice from './DisplayPrice';
import DisplayCompanyInfo from './DisplayCompanyInfo';

function App() {
  const [ticker, setTicker] = useState('')
  
  return (
    <div className="App">
      <Header />
      <CompanyInput  setTicker={setTicker} />
      {ticker && <DisplayCompanyInfo ticker={ticker}/>}
      {ticker && <DisplayPrice ticker={ticker}/>}
    </div>
  );
}

export default App;
