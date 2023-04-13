import React, {useState,useEffect,} from "react";
import "./Stocks.css";
import { data } from "./data";

const Stocks = () => {
  const [stockData, setStockData] = useState([]);
  useEffect(() => {
    const promises = data.map(stock => {
      return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apikey=EF9NRUPVNTLA64VE`)
        .then(response => response.json())
        .then(data => {
          return {
            name : stock.name,
            symbol : stock.symbol,
            open : data['Global Quote']['02. open'],
            high : data['Global Quote']['03. high'],
            low : data['Global Quote']['04. low'],
            price: data['Global Quote']['05. price'],
            volume: data['Global Quote']['06. volume'],
          };
        })
        .catch(error => {
          console.error(`Error fetching data for ${stock.name}: ${error}`);
          return {
            name: stock.name,
            symbol: stock.symbol,
            open: '-',
            high: '-',
            low: '-',
            price: '-',
            volume: '-',
          };
        });
    });
    Promise.all(promises).then(data => {
      setStockData(data);
    });
  },[]);
  return (
    <div className="container">
      <div className="heading">
        <h1>Stock List</h1>
      </div>
      <div className="stocks-card">
        <table>
          <thead>
            <tr className="head-row">
              <th>Name</th>
              <th>Symbol</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Price</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map(stock => (
              <tr key={stock.symbol} className="content-row">
                <td className="name">{stock.name}</td>
                <td className="symbol">{stock.symbol}</td>
                <td className="open">{stock.open}</td>
                <td className="high">{stock.high}</td>
                <td className="low">{stock.low}</td>
                <td className="price">{stock.price}</td>
                <td className="volume">{stock.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Stocks;
