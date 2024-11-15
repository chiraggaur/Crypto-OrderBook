import axios from "axios";
import { OrderBookData } from "../types/orderBook";

export const fetchOrderBookData = async (
  pair: string
): Promise<OrderBookData> => {
  // Convert pair to Binance's format (e.g., BTC/USDT -> BTCUSDT)
  const symbol = pair.replace("/", "").toUpperCase();
  const API_URL = `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=10`;

  const response = await axios.get(API_URL);
  return {
    bids: response.data.bids,
    asks: response.data.asks,
  };
};
