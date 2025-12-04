import {
    IsString,
    IsBoolean,
    IsOptional,
    MinLength,
    MaxLength,
} from 'class-validator';

export class UpdateArticuloDto {
    @IsString({ message: 'The name must be a string' })
    @MinLength(3, { message: 'The name must have at least 3 characters' })
    @MaxLength(50, { message: 'The name must not exceed 50 characters' })
    @IsOptional()
    name?: string;

    @IsString({ message: 'The description must be a string' })
    @MaxLength(200, {
        message: 'The description must not exceed 200 characters',
    })
    @IsOptional()
    description?: string;

    @IsBoolean({ message: 'isActive must be a boolean value' })
    @IsOptional()
    isActive?: boolean;
}
