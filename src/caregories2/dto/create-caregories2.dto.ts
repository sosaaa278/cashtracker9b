import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateCaregories2Dto {
    @IsString({ message: 'The name must be a string' })
    @IsNotEmpty({ message: 'The name should not be empty' })
    name: string;
}