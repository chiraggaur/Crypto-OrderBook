import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { SpreadIndicatorProps } from "@/types/orderBook";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SpreadIndicator: React.FC<SpreadIndicatorProps> = ({ orderBookData }) => {
  const [spreadData, setSpreadData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    if (orderBookData) {
      const bestBid = parseFloat(orderBookData.bids[0][0]);
      const bestAsk = parseFloat(orderBookData.asks[0][0]);
      const spread = bestAsk - bestBid;
      const now = new Date().toLocaleTimeString();

      setSpreadData((prev) => [...prev.slice(-59), spread]);
      setLabels((prev) => [...prev.slice(-59), now]);
    }
  }, [orderBookData]);

  const data = {
    labels,
    datasets: [
      {
        label: "Spread",
        data: spreadData,
        fill: true,
        backgroundColor: "rgba(34, 202, 236, 0.3)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "white",
        bodyColor: "white",
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (tooltipItem: any) => {
            const spread = tooltipItem.raw;
            const timestamp = labels[tooltipItem.dataIndex];
            return `Spread: $${spread.toFixed(2)} | Time: ${timestamp}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-lg mb-4 max-w-full">
      <h3 className="text-white text-lg mb-4 text-center font-semibold">
        Spread Indicator (Area Chart)
      </h3>
      <div className="relative h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SpreadIndicator;
