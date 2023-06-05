import { IsBoolean, IsInt, IsNumber, IsPositive, IsString, Max, Min } from "class-validator";

export class CreateLoanDto {
    @IsBoolean()
    valid: boolean;
    
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    bank: string;

    @IsInt()
    @IsPositive()
    @Min(1)
    amount: number;

    @IsNumber()
    @IsPositive()
    @Min(0)
    @Max(100)
    interest: number;

    @IsInt()
    @IsPositive()
    @Min(1)
    months: number;

    @IsString()
    type: string;

}
