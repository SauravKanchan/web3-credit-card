type Chain = "polygon" | "arbitrum" | "gnosis";

type Whitelist = {
  address: string;
  chain: Chain;
};

type WhitelistState = {
  whitelist: Whitelist[];
};

type Card = {
  chain: Chain;
  balance: number;
};

type AccountState = {
  address: string;
  isConnected: boolean;
  balance: number | null;
  outstandingBalance: number | null;
  cards: Card[];
};

type Transaction = {
  chain: Chain;
  hash: string;
  amount: number;
  receiver: string;
  date: string | number;
};

type TransactionState = {
  transactions: Transaction[];
};

export type {
  WhitelistState,
  Chain,
  Whitelist,
  AccountState,
  Card,
  Transaction,
  TransactionState,
};
