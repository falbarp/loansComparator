import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { LoanModule } from 'src/loans/loan.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [LoanModule],
})
export class SeedModule {}
