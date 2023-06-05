import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Loan extends Document {
    @Prop({
        index: true,
    })
    valid: boolean;
    
     @Prop({
        index: false,
    })
    title: string;

    @Prop({
        index: false,
    })
    description: string;
    
    @Prop({
        index: true,
    })
    bank: string;
    
    @Prop({
        index: true,
    })
    amount: number;
    
    @Prop({
        index: true,
    })
    interest: number;
    
    @Prop({
        index: true,
    })
    months: number;
    
}

export const LoanSchema = SchemaFactory.createForClass(Loan);
