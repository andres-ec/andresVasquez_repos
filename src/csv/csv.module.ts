import { Module } from '@nestjs/common';
import { CsvService } from './csv.service';
import { CsvController } from './csv.controller';
import { MetricsModule } from 'src/metrics/metrics.module';

@Module({
  controllers: [CsvController],
  providers: [CsvService],
  imports: [MetricsModule]
})
export class CsvModule {}
