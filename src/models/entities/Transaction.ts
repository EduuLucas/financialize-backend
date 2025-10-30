import { TransactionType, TransactionStatus } from './enums';
import { Account } from './Account';
import { Category } from './Category';
import { Invoice } from './Invoice';

export class Transaction {
  public readonly id: string;
  public accountId: string;
  public categoryId?: string;
  public invoiceId?: string;
  public type: TransactionType;
  public description: string;
  public amount: number;
  public date: Date;
  public totalInstallments?: number;
  public currentInstallment?: number;
  public recurring: boolean;
  public recurringId?: string;
  public status: TransactionStatus;
  public account: Account;
  public category?: Category;
  public invoice?: Invoice;

  constructor(props: Omit<Transaction, 'id' | 'account' | 'category' | 'invoice'> & { 
    id?: string, 
    account?: Account, 
    category?: Category, 
    invoice?: Invoice 
  }) {
    this.id = props.id ?? '';
    this.accountId = props.accountId;
    this.categoryId = props.categoryId;
    this.invoiceId = props.invoiceId;
    this.type = props.type;
    this.description = props.description;
    this.amount = props.amount;
    this.date = props.date;
    this.totalInstallments = props.totalInstallments;
    this.currentInstallment = props.currentInstallment;
    this.recurring = props.recurring || false;
    this.recurringId = props.recurringId;
    this.status = props.status || TransactionStatus.ACTIVE;
    this.account = props.account ?? ({} as Account);
    this.category = props.category;
    this.invoice = props.invoice;
  }
}