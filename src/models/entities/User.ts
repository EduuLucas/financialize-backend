import { Account } from './Account';
import { Category } from './Category';

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public password: string;
  public readonly createdAt: Date;
  public updatedAt: Date;
  public accounts: Account[];
  public categories: Category[];

  constructor(props: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'accounts' | 'categories'> & { id?: string }) {
    this.id = props.id ?? '';
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.accounts = [];
    this.categories = [];
  }
}