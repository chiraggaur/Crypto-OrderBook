import React from "react";
import { AsksTableProps } from "../types/orderBook";

const AsksTable: React.FC<AsksTableProps> = ({ asks, selectedPair }) => {
  let cumulativeSum = 0;

  // Helper function to determine the color based on price change
  const getPriceColor = (index: number, currentPrice: number) => {
    if (index === 0) return "";
    const prevPrice = parseFloat(asks[index - 1][0]);
    return currentPrice > prevPrice ? "text-green-400" : "text-red-400";
  };

  return (
    <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-md">
      <table className="w-full table-auto text-sm">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Side</th>
            <th className="px-4 py-2 text-left">
              Price ({selectedPair.quote})
            </th>
            <th className="px-4 py-2 text-left">
              Amount ({selectedPair.base})
            </th>
            <th className="px-4 py-2 text-left">
              Total ({selectedPair.quote})
            </th>
            <th className="px-4 py-2 text-left">Sum ({selectedPair.quote})</th>
          </tr>
        </thead>
        <tbody className="text-gray-200">
          {asks.map(([price, amount], index) => {
            const total = parseFloat(price) * parseFloat(amount);
            cumulativeSum += total;

            // Determine color for price change
            const priceColor = getPriceColor(index, parseFloat(price));

            return (
              <tr
                key={index}
                className="border-t border-gray-600 hover:bg-gray-700"
              >
                <td className="px-4 py-2 text-red-400">Sell {index + 1}</td>
                <td className={`px-4 py-2 ${priceColor}`}>{price}</td>
                <td className="px-4 py-2">{amount}</td>
                <td className="px-4 py-2">{total.toFixed(2)}</td>
                <td className="px-4 py-2">{cumulativeSum.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AsksTable;
