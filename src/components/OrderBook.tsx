import React, { useState } from "react";
import { useOrderBook } from "../hooks/useOrderBook";
import BidsTable from "./BidsTable";
import AsksTable from "./AsksTable";
import SpreadIndicator from "./SpreadIndicator";
import OrderbookImbalanceIndicator from "./OrderbookImbalanceIndicator";
import MarketDepthChart from "./MarketDepthChart";

const tradingPairs = [
  { base: "BTC", quote: "USDT" },
  { base: "ETH", quote: "USDT" },
  { base: "XRP", quote: "USDT" },
];

const OrderBook: React.FC = () => {
  const [selectedPair, setSelectedPair] = useState(tradingPairs[0]); // Default to first pair
  const { orderBookData, loading, error } = useOrderBook(
    `${selectedPair.base}${selectedPair.quote}` // Pass pair in correct format
  );

  const handlePairChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [base, quote] = e.target.value.split("-");
    setSelectedPair({ base, quote });
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg text-white w-full max-w-full mx-auto">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-2xl font-semibold text-center mr-4">
          {selectedPair.base}/{selectedPair.quote} Order Book
        </h2>
        <select
          className="bg-gray-800 text-white rounded p-2"
          value={`${selectedPair.base}-${selectedPair.quote}`} // Use hyphenated format for value
          onChange={handlePairChange}
        >
          {tradingPairs.map((pair) => (
            <option
              key={`${pair.base}-${pair.quote}`}
              value={`${pair.base}-${pair.quote}`}
            >
              {pair.base}/{pair.quote}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading && <p className="text-blue-400 text-center">Loading data...</p>}

      {!loading && orderBookData && (
        <div className="flex flex-col md:flex-row gap-4">
          {/* Bids Section */}
          <div className="w-full md:w-1/2 bg-green-900 bg-opacity-20 rounded-lg p-2">
            <h3 className="text-xl mb-2 text-green-400">Buy Orders</h3>
            {/* <BidsTable bids={orderBookData.bids} /> */}
            <BidsTable bids={orderBookData.bids} selectedPair={selectedPair} />
          </div>

          {/* Asks Section */}
          <div className="w-full md:w-1/2 bg-red-900 bg-opacity-20 rounded-lg p-2">
            <h3 className="text-xl mb-2 text-red-400">Sell Orders</h3>
            {/* <AsksTable asks={orderBookData.asks} /> */}
            <AsksTable asks={orderBookData.asks} selectedPair={selectedPair} />
          </div>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-xl mb-4 text-center">Market Indicators</h3>
        <div className="mb-6">
          <SpreadIndicator orderBookData={orderBookData} />
        </div>
        <div className="mb-6">
          <OrderbookImbalanceIndicator orderBookData={orderBookData} />
        </div>
        <div className="mb-6">
          <MarketDepthChart orderBookData={orderBookData} />
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
