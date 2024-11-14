import axios from "axios";
import { BINANCE_ORDER_BOOK_API } from "../constants/apiConstants";
import { OrderBookData } from "../types/orderBook";

export const fetchOrderBookData = async (): Promise<OrderBookData> => {
  const response = await axios.get(BINANCE_ORDER_BOOK_API);
  return {
    bids: response.data.bids,
    asks: response.data.asks,
  };
};
