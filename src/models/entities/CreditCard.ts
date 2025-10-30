import { Account } from './Account';
import { Invoice } from './Invoice';

export class CreditCard {
  public readonly id: string;
  public accountId: string;
  public limit: number;
  public closingDay: number;
  public dueDay: number;
  public account: Account;
  public invoices: Invoice[];

  constructor(props: Omit<CreditCard, 'id' | 'account' | 'invoices'> & { id?: string, account?: Account }) {
    this.id = props.id ?? '';
    this.accountId = props.accountId;
    this.limit = props.limit;
    this.closingDay = props.closingDay;
    this.dueDay = props.dueDay;
    this.account = props.account ?? ({} as Account);
    this.invoices = [];
  }
}