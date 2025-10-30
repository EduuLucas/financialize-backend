import { CreditCard } from './CreditCard';
import { Transaction } from './Transaction';

export class Invoice {
  public readonly id: string;
  public creditCardId: string;
  public month: number;
  public year: number;
  public totalAmount: number;
  public paidAmount: number;
  public paid: boolean;
  public transactions: Transaction[];
  public creditCard: CreditCard;

  constructor(props: Omit<Invoice, 'id' | 'transactions' | 'creditCard'> & { id?: string, creditCard?: CreditCard }) {
    this.id = props.id ?? '';
    this.creditCardId = props.creditCardId;
    this.month = props.month;
    this.year = props.year;
    this.totalAmount = props.totalAmount || 0;
    this.paidAmount = props.paidAmount || 0;
    this.paid = props.paid || false;
    this.transactions = [];
    this.creditCard = props.creditCard ?? ({} as CreditCard);
  }
}