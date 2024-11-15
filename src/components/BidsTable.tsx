import React from "react";
import { BidsTableProps } from "../types/orderBook";

const BidsTable: React.FC<BidsTableProps> = ({ bids, selectedPair }) => {
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
            <th className="px-4 py-2 text-left">Sum ({selectedPair.quote})</th>
          </tr>
        </thead>
        <tbody className="text-gray-200">
          {bids.map(([price, amount], index) => {
            const total = parseFloat(price) * parseFloat(amount);

            return (
              <tr
                key={index}
                className="border-t border-gray-600 hover:bg-gray-700"
              >
                <td className="px-4 py-2 text-green-400">Buy {index + 1}</td>
                <td className="px-4 py-2">{Number(price).toFixed(2)}</td>
                <td className="px-4 py-2">{amount}</td>
                <td className="px-4 py-2">{total.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BidsTable;
