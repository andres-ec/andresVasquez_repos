import { Injectable } from '@nestjs/common';
import { ResponseMetricsDto } from 'src/metrics/dto/reponse-metrics.dto';
import { MetricsService } from 'src/metrics/metrics.service';

@Injectable()
export class CsvService {
    constructor(
        private readonly metricsService:MetricsService,
    ) {}
    
    async getData(id: number):Promise<ResponseMetricsDto[]> {
        return (await this.metricsService.getInfoByTribeId(id)).repositories;
    }

}
