import { Properties } from './properties.model';
import { Users } from './users.model';

export class Purchase {
  id?: number;

  saleValue?: string;

  profitPercentage?: string;

  status?: 'FECHADA' | 'EM PROCESSO';

  user?: Users;

  property?: Properties;
}
