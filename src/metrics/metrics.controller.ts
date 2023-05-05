import { Controller, Get, Param } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metricsService.getInfoByTribeId(+id);
  }

}
