import React from "react";
import { AsksTableProps } from "../types/orderBook";

const AsksTable: React.FC<AsksTableProps> = ({ asks }) => {
  return (
    <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-md">
      <table className="w-full table-auto text-sm">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody className="text-gray-200">
          {asks.map(([price, amount], index) => {
            const total = (parseFloat(price) * parseFloat(amount)).toFixed(2);
            return (
              <tr
                key={index}
                className="border-t border-gray-600 hover:bg-gray-700"
              >
                <td className="px-4 py-2">{price}</td>
                <td className="px-4 py-2">{amount}</td>
                <td className="px-4 py-2">{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AsksTable;
