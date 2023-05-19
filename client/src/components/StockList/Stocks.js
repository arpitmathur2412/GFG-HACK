import React, {useState,useEffect,} from "react";
import "./Stocks.css";
import { data } from "./data";

const Stocks = () => {
  const [stockData, setStockData] = useState([]);
  useEffect(() => {
    const promises = data.map(async (stock,index) => {
      await new Promise(resolve => setTimeout(resolve, index * 5));
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
// import React, {useState,useEffect,} from "react";
// import "./Stocks.css";
// import { data } from "./data";
// import axios from 'axios'

// const Stocks = () => {
//   const [stockData, setStockData] = useState([]);
//     useEffect(() => {
//       const fetchData = async () => {
//         const promises = data.map(async (stock, index) => {
//           const options = {
//             method: 'POST',
//             url: 'https://yfinance-stock-market-data.p.rapidapi.com/stock-info',
//             headers: {
//               'content-type': 'application/x-www-form-urlencoded',
//               'X-RapidAPI-Key': 'd1e840c196msh732a0422ced0b00p14b0dajsn581b3e83a039',
//               'X-RapidAPI-Host': 'yfinance-stock-market-data.p.rapidapi.com'
//             },
//             data: new URLSearchParams({ symbol: stock.symbol }),
//           };
//           await new Promise(resolve => setTimeout(resolve, index * 2500));
//           try {
//             const res = await axios.request(options);
//             return {
//               name: stock.name,
//               symbol: stock.symbol,
//               open: res.data.data.open,
//               high: res.data.data.dayHigh,
//               low: res.data.data.dayLow,
//               price: res.data.data.currentPrice,
//               volume: res.data.data.marketCap,
//             };
//           } catch (error) {
//             console.error(`Error fetching data for ${stock.name}: ${error}`);
//             return {
//               name: stock.name,
//               symbol: stock.symbol,
//               open: '-',
//               high: '-',
//               low: '-',
//               price: '-',
//               volume: '-',
//             };
//           }
//         });
  
//         try {
//           const data = await Promise.all(promises);
//           setStockData(data);
//         } catch (error) {
//           console.error('Error fetching stock data:', error);
//         }
//       };
//       fetchData();
//   },[]);
//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>Stock List</h1>
//       </div>
//       <div className="stocks-card">
//         <table>
//           <thead>
//             <tr className="head-row">
//               <th>Name</th>
//               <th>Symbol</th>
//               <th>Open</th>
//               <th>High</th>
//               <th>Low</th>
//               <th>Price</th>
//               <th>Volume</th>
//             </tr>
//           </thead>
//           <tbody>
//             {stockData.map(stock => (
//               <tr key={stock.symbol} className="content-row">
//                 <td className="name">{stock.name}</td>
//                 <td className="symbol">{stock.symbol}</td>
//                 <td className="open">{stock.open}</td>
//                 <td className="high">{stock.high}</td>
//                 <td className="low">{stock.low}</td>
//                 <td className="price">{stock.price}</td>
//                 <td className="volume">{stock.volume}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default Stocks;