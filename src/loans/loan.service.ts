import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';

import { Loan } from './entities/loan.entity';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoanService {
  constructor(
    @InjectModel(Loan.name)
    private readonly loanModel: Model<Loan>,
  ) {}

  async create(createLoanDto: CreateLoanDto) {
    const loan = await this.loanModel.create(createLoanDto);
    return loan;
  }

  async findAll() {
    return await this.loanModel.find();
  }

  async findOne(id: string) {
    let loan = Loan;

    if (isValidObjectId(id)) {
      loan = await this.loanModel.findById(id);
    }

    if (!loan || !isValidObjectId(id)) {
      throw new NotFoundException(`Loan #${id} not found`);
    }

    return loan;
  }

  async update(id: string, updateLoanDto: UpdateLoanDto) {
    if (!isValidObjectId(id)) {
      throw new NotFoundException(`Loan #${id} not found`);
    }
    return await this.loanModel.findByIdAndUpdate(id, updateLoanDto, {
      new: true,
    });
  }

  async remove(id: string) {
    const { deletedCount } = await this.loanModel.deleteOne({ _id: id });
    if (!deletedCount) {
      throw new BadRequestException(`Loan #${id} not found`);
    }
    return { deleted: true };
  }
}
