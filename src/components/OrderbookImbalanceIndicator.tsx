import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { OrderbookImbalanceIndicatorProps } from "@/types/orderBook";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const OrderbookImbalanceIndicator: React.FC<
  OrderbookImbalanceIndicatorProps
> = ({ orderBookData }) => {
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

  if (totalBidVolume === 0 && totalAskVolume === 0) {
    return null;
  }

  const chartData = {
    labels: ["Bid Volume", "Ask Volume"],
    datasets: [
      {
        data: [totalBidVolume, totalAskVolume],
        backgroundColor: ["#34D399", "#F87171"], // Green for Bid and Red for Ask
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
    cutout: "70%",
    rotation: 0,
    circumference: 360,
  };

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-lg shadow-lg mb-4 max-w-full">
      <h3 className="text-white text-lg mb-4 text-center font-semibold">
        Orderbook Imbalance Indicator
      </h3>
      <div className="relative flex justify-center items-center h-72">
        {/* Doughnut Chart */}
        <Doughnut data={chartData} options={chartOptions} />
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
