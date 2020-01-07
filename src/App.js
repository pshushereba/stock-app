import React from 'react';
import './App.css';

// Import components
import Navbar from './Navbar.js';
import StockData from './StockData.js';
import StockChart from './StockChart.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StockData />
      <StockChart />
    </div>
  );
}

export default App;
