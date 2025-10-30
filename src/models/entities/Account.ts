import { AccountType } from './enums';
import { User } from './User';
import { CreditCard } from './CreditCard';
import { Transaction } from './Transaction';

export class Account {
  public readonly id: string;
  public userId: string;
  public name: string;
  public type: AccountType;
  public balance: number;
  public creditCard?: CreditCard;
  public user: User;
  public transactions: Transaction[];

  constructor(props: Omit<Account, 'id' | 'user' | 'creditCard' | 'transactions'> & { id?: string, user?: User }) {
    this.id = props.id ?? '';
    this.userId = props.userId;
    this.name = props.name;
    this.type = props.type;
    this.balance = props.balance || 0;
    this.user = props.user ?? ({} as User);
    this.transactions = [];
  }
}