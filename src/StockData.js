import React, {useState, useEffect} from 'react';
import axios from 'axios';


const StockData = (props) => {
    const [stockInfo, setStockInfo] = useState({});

    useEffect(() => {
        axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=DHF0PBPPBUW450JI')
        .then((res) => {
            setStockInfo(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {console.log(stockInfo)}
        </div>
    )
}

export default StockData;