export type Order = [string, string];

export interface OrderBookData {
  bids: Order[];
  asks: Order[];
}

export interface OrderBookProps {
  selectedPair: string;
}

export interface BidsTableProps {
  bids: [string, string][];
  selectedPair: { base: string; quote: string };
}

export interface AsksTableProps {
  asks: [string, string][];
  selectedPair: { base: string; quote: string };
}

export interface ExtendedOrder {
  side: string;
  price: number;
  amount: number;
  total: number;
  sum: number;
}

export interface OrderbookImbalanceIndicatorProps {
  orderBookData: { bids: [string, string][]; asks: [string, string][] } | null;
}

export interface SpreadIndicatorProps {
  orderBookData: { bids: [string, string][]; asks: [string, string][] } | null;
}

export interface MarketDepthChartProps {
  orderBookData: { bids: [string, string][]; asks: [string, string][] } | null;
}
