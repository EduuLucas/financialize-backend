export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
  CREDIT_PURCHASE = 'credit_purchase',
  PAYMENT = 'payment',
}

export enum TransactionStatus {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  REFUNDED = 'refunded',
}

export enum AccountType {
  BANK = 'bank',
  WALLET = 'wallet',
  CREDIT_CARD = 'credit_card',
}