type TransactionType = {
    location: string;
    amount: number;
    date: string;
}

type SavingsType = {
    monthlyAmount: number;
    saveAmount: number;
    userID: string;
  }


export type { TransactionType, SavingsType }