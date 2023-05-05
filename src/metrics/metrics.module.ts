import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metrics } from '../common/entities/metrics.entity';
import { Repo } from '../common/entities/repo.entity';
import { Tribe } from '../common/entities/tribe.entity';
import { RepositoriesModule } from 'src/repositories/repositories.module';

@Module({
  controllers: [MetricsController],
  providers: [MetricsService],
  imports: [
    TypeOrmModule.forFeature([Metrics, Repo, Tribe]),
    RepositoriesModule
  ],
  exports: [MetricsService]
})
export class MetricsModule {}
