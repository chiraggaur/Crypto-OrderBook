import { OrderbookImbalanceIndicatorProps } from "@/types/orderBook";
import React, { useMemo } from "react";

const OrderbookImbalanceIndicator: React.FC<
  OrderbookImbalanceIndicatorProps
> = ({ orderBookData }) => {
  // Memoize calculations to optimize performance
  const { totalBidVolume, totalAskVolume, imbalance } = useMemo(() => {
    if (
      !orderBookData ||
      !orderBookData.bids.length ||
      !orderBookData.asks.length
    ) {
      return { totalBidVolume: 0, totalAskVolume: 0, imbalance: 0 };
    }

    const totalBidVolume = orderBookData.bids.reduce(
      (acc, [_, volume]) => acc + parseFloat(volume),
      0
    );
    const totalAskVolume = orderBookData.asks.reduce(
      (acc, [_, volume]) => acc + parseFloat(volume),
      0
    );

    const imbalance =
      ((totalBidVolume - totalAskVolume) / (totalBidVolume + totalAskVolume)) *
      100;

    return { totalBidVolume, totalAskVolume, imbalance };
  }, [orderBookData]);

  // Early return if no valid data is present
  if (totalBidVolume === 0 && totalAskVolume === 0) {
    return null;
  }

  // Defining the indicator bar color and width based on the imbalance value
  const barColor = imbalance > 0 ? "bg-green-500" : "bg-red-500";
  const barWidth = Math.min(Math.abs(imbalance), 100); // Limit width to 100%

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-lg shadow-lg mb-4 max-w-full">
      <h3 className="text-white text-lg mb-4 text-center font-semibold">
        Orderbook Imbalance Indicator
      </h3>
      <div className="w-full bg-gray-700 rounded-lg overflow-hidden h-6">
        <div
          className={`h-full ${barColor} rounded-lg transition-all duration-300`}
          style={{ width: `${barWidth}%` }}
        ></div>
      </div>
      <p className="text-white mt-2 text-center font-medium">
        Imbalance: {imbalance.toFixed(2)}%
      </p>
      <div className="flex justify-between text-white mt-2 text-sm">
        <span>Total Bid Volume: {totalBidVolume.toFixed(2)}</span>
        <span>Total Ask Volume: {totalAskVolume.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderbookImbalanceIndicator;
