import React from "react";
import { useOrderBook } from "../hooks/useOrderBook";
import BidsTable from "./BidsTable";
import AsksTable from "./AsksTable";
import SpreadIndicator from "./SpreadIndicator";
import OrderbookImbalanceIndicator from "./OrderbookImbalanceIndicator";
import MarketDepthChart from "./MarketDepthChart";

const OrderBook: React.FC = () => {
  const { orderBookData, loading, error } = useOrderBook();

  return (
    <div className="bg-gray-900 p-6 rounded-lg text-white w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        BTC/USDT Order Book
      </h2>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading && <p className="text-blue-400 text-center">Loading data...</p>}

      {!loading && orderBookData && (
        <div className="flex flex-col md:flex-row gap-4">
          {/* Bids Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl mb-2 text-green-400">Buy Orders</h3>
            <BidsTable bids={orderBookData.bids} />
          </div>

          {/* Asks Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl mb-2 text-red-400">Sell Orders</h3>
            <AsksTable asks={orderBookData.asks} />
          </div>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-xl mb-4 text-center">Market Indicators</h3>

        {/* Spread Indicator */}
        <div className="mb-6">
          <SpreadIndicator orderBookData={orderBookData} />
        </div>

        {/* Orderbook Imbalance Indicator */}
        <div className="mb-6">
          <OrderbookImbalanceIndicator orderBookData={orderBookData} />
        </div>

        {/* Market Depth Chart */}
        <div className="mb-6">
          <MarketDepthChart orderBookData={orderBookData} />
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
