export class Purchase {
  id?: number;

  saleValue?: string;

  profitPercentage?: string;

  status?: 'FECHADA' | 'EM PROCESSO';

  user?: number;

  property?: number;
}
