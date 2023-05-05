import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tribe } from '../common/entities/tribe.entity';
import { RepositoriesService } from 'src/repositories/repositories.service';
import { ResponseMetricsDto } from './dto/reponse-metrics.dto';
import { Verification } from 'src/repositories/interfaces/verification.interface';

@Injectable()
export class MetricsService {
  constructor(
    @InjectRepository(Tribe)
    private readonly tribeRepository: Repository<Tribe>,

    private readonly repositoriesService: RepositoriesService,
  ) {}

  async getMetricsFromDB(id: number): Promise<Tribe> {
    const currentYear = new Date().getFullYear();
    const tribe = await this.tribeRepository.createQueryBuilder("tribe")
    .leftJoinAndSelect("tribe.organization", "org")
    .leftJoinAndSelect("tribe.repositories", "repo")
    .leftJoinAndSelect("repo.metrics", "metrics")
    .where("tribe.id_tribe = :id_tribe", { id_tribe: id })
    .andWhere('EXTRACT(YEAR FROM DATE_TRUNC(\'year\', repo.create_time)) = :currentYear', { currentYear:currentYear })
    .andWhere("repo.state = :state", { state: 'E' })
    .andWhere("metrics.coverage > :coverage", { coverage: 75 })
    .getOne();
    if (!tribe) {
      throw new NotFoundException(`La Tribu no se encuentra registrada`);
    }
    if(tribe.repositories == undefined || tribe.repositories.length == 0) {
      throw new NotFoundException(`La Tribu no tiene repositorios que cumplan con la cobertura necesaria`);
    }
    return tribe;
  }

  async getInfoByTribeId(id: number) {
    let response:ResponseMetricsDto[] = [];

    const tribe = this.getMetricsFromDB(id);
    for (const repository of (await tribe).repositories) {
      const responseDTO: ResponseMetricsDto = {
        id: repository.id_repository,
        name: repository.name,
        tribe: (await tribe).name,
        organization: (await tribe).organization.name,
        coverage: repository.metrics.coverage+'%',
        codeSmells: repository.metrics.code_smells,
        bugs: repository.metrics.bugs,
        vulnerabilities: repository.metrics.vulnerabilities,
        hotspots: repository.metrics.hotspot,
        verificationState: this.getVerification(repository.id_repository),
        state: this.getState(repository.state),
      };
      response.push(responseDTO);
    }
    return { repositories: response };
  }

  private getState(state:string):string {
    switch(state) {
      case 'E':
        return "Habilitado";
      case 'D':
        return "Deshabilitado";
      case 'A':
        return "Archivado";
    }
  }

  private getVerification(id:number):string {
    const repositories:Verification[] = this.repositoriesService.findAll().repositories;
    for(const verification of repositories) {
      if(verification.id == id) {
        return this.getVerificationValue(verification.state);
      }
    }
  }

  private getVerificationValue(state:number):string {
    switch(state) {
      case 604:
        return "Verificado";
      case 605:
        return "En espera";
      case 606:
        return "Aprobado";
    }
  }
}
