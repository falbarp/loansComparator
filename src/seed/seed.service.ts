import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { LoanResponse } from './interfaces/loas-response.interface';


@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;
  
  async executeSeed() {
    const { data } = await this.axios.get<LoanResponse>(
      'https://api.mockapigenerator.com/bc34cc9f-ace7-4b96-9edf-f851f39aa6e5/data',
    );
  return data;
  }
}
