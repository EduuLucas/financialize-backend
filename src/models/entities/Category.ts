import { TransactionType } from './enums';
import { User } from './User';
import { Transaction } from './Transaction';

export class Category {
  public readonly id: string;
  public userId: string;
  public name: string;
  public type: TransactionType;
  public color?: string;
  public user: User;
  public transactions: Transaction[];

  constructor(props: Omit<Category, 'id' | 'user' | 'transactions'> & { id?: string, user?: User }) {
    this.id = props.id ?? '';
    this.userId = props.userId;
    this.name = props.name;
    this.type = props.type;
    this.color = props.color;
    this.user = props.user ?? ({} as User);
    this.transactions = [];
  }
}