export type Order = [string, string];

export interface OrderBookData {
  bids: Order[];
  asks: Order[];
}

export interface AsksTableProps {
  asks: Order[];
}

export interface BidsTableProps {
  bids: Order[];
}

export interface ExtendedOrder {
  side: string;
  price: number;
  amount: number;
  total: number;
  sum: number;
}

export interface AsksTableProps {
  asks: Order[];
}

export interface BidsTableProps {
  bids: Order[];
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
