import { Controller, Get, Res, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { createObjectCsvWriter } from 'csv-writer';
import * as fs from 'fs';
import { CsvService } from './csv.service';

@ApiTags('CSV')
@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: CsvService) {}

  @Get(':id')
  async generateCsv(@Res() res, @Param('id') id: number) {
    const csvWriter = createObjectCsvWriter({
      path: 'file.csv',
      header: [
        { id: 'id', title: 'id' }, 
        { id: 'name', title: 'name' }, 
        { id: 'tribe', title: 'tribe' }, 
        { id: 'organization', title: 'organization' }, 
        { id: 'coverage', title: 'coverage' }, 
        { id: 'codeSmells', title: 'codeSmells' }, 
        { id: 'bugs', title: 'bugs' }, 
        { id: 'vulnerabilities', title: 'vulnerabilities' }, 
        { id: 'hotspots', title: 'hotspots' }, 
        { id: 'verificationState', title: 'verificationState' }, 
        { id: 'state', title: 'state' }
      ],
    });

    const data = this.csvService.getData(id);
    data.then((arr) => {
      csvWriter.writeRecords(arr);
    });

    res.set({
      'Content-Disposition': 'attachment; filename="file.csv"',
      'Content-Type': 'text/csv',
    });

    fs.createReadStream('file.csv').pipe(res);
  }
}
