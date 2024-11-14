import { useState, useEffect } from "react";
import { OrderBookData } from "../types/orderBook";
import { fetchOrderBookData } from "../services/api";

export const useOrderBook = () => {
  const [orderBookData, setOrderBookData] = useState<OrderBookData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchOrderBookData();
        setOrderBookData(data);
        setError(null);
      } catch (err) {
        setError("Error fetching order book data");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
    const intervalId = setInterval(getData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return { orderBookData, loading, error };
};