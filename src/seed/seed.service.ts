import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import axios, { AxiosInstance } from 'axios';
import { LoanResponse } from './interfaces/loas-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Loan } from 'src/loans/entities/loan.entity';


@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Loan.name)
    private readonly loanModel: Model<Loan>,
    ) {}
  
  async executeSeed() {
    const { data } = await this.axios.get<LoanResponse>(
      'https://api.mockapigenerator.com/bc34cc9f-ace7-4b96-9edf-f851f39aa6e5/data',
    );


  
      const loanSeeded = await this.loanModel.create(data);


    return loanSeeded;
}
}