import { Users } from "./users.model";

export class Properties {
  id?: number;

  description?: string;

  value?: string;

  user?: Users;

  status?: 'VENDIDO' | 'EM ESTOQUE';
}
