import { StringOption } from "necord";

export class StocksDto {
   @StringOption({
    name: 'stocks',
    description: 'Código do Ativo que deseja buscar!',
    required: true,
  })
  options: string;
}