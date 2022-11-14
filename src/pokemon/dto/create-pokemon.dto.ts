import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @MinLength(1, {
    message: 'Nombre requiere mínimo 1 caracteres',
  })
  name: string;

  @IsInt()
  @Min(1, {
    message: 'No requiere mínimo 1 caracteres',
  })
  @IsPositive()
  no: number;
}
