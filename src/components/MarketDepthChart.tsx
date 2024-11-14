import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { MarketDepthChartProps } from "@/types/orderBook";

ChartJS.register(...registerables);

const MarketDepthChart: React.FC<MarketDepthChartProps> = ({
  orderBookData,
}) => {
  if (!orderBookData) return null;

  const bidData = orderBookData.bids.map(([price, volume]) => ({
    x: parseFloat(price),
    y: parseFloat(volume),
  }));

  const askData = orderBookData.asks.map(([price, volume]) => ({
    x: parseFloat(price),
    y: parseFloat(volume),
  }));

  let cumulativeBidVolume = 0;
  const accumulatedBidData = bidData.map((point) => {
    cumulativeBidVolume += point.y;
    return { x: point.x, y: cumulativeBidVolume };
  });

  let cumulativeAskVolume = 0;
  const accumulatedAskData = askData.map((point) => {
    cumulativeAskVolume += point.y;
    return { x: point.x, y: cumulativeAskVolume };
  });

  // Calculate mid-market price
  const midMarketPrice =
    (accumulatedBidData[accumulatedBidData.length - 1]?.x +
      accumulatedAskData[0]?.x) /
    2;

  const data = {
    datasets: [
      {
        label: "Bids",
        data: accumulatedBidData,
        borderColor: "rgba(0, 200, 0, 0.8)",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        fill: true,
        borderWidth: 2,
        stepped: "before",
      },
      {
        label: "Asks",
        data: accumulatedAskData,
        borderColor: "rgba(200, 0, 0, 0.8)",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        fill: true,
        borderWidth: 2,
        stepped: "before",
      },
      {
        label: "Mid Market Price",
        data: [
          { x: midMarketPrice, y: 0 },
          {
            x: midMarketPrice,
            y: Math.max(cumulativeBidVolume, cumulativeAskVolume),
          },
        ],
        borderColor: "rgba(255, 255, 0, 0.8)",
        borderWidth: 1,
        borderDash: [5, 5],
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        ticks: {
          color: "#FFFFFF",
          callback: (value: number) => `$${value.toFixed(2)}`,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF",
          beginAtZero: true,
          callback: (value: number) => `${value.toFixed(0)} units`,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: function (tooltipItem: any) {
            return `${tooltipItem.dataset.label}: $${tooltipItem.raw.x.toFixed(
              2
            )} | ${tooltipItem.raw.y.toFixed(0)} units`;
          },
        },
      },
      legend: {
        display: true,
        labels: {
          color: "#FFFFFF",
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-white text-lg mb-2">Enhanced Market Depth Chart</h3>
      <div className="relative h-96">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MarketDepthChart;
