import { Area } from './area';

export class Equipo {
  constructor(
    public nombre: string,
    public areas: Area[],
  ) {}
}
