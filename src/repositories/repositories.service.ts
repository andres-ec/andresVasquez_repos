import { Injectable } from '@nestjs/common';
import { Repository } from './interfaces/repository.interface';

@Injectable()
export class RepositoriesService {
  private readonly repositories: Repository[];

  constructor() {
    this.repositories = [
      {
        id: 1,
        state: 604,
      },
      {
        id: 2,
        state: 605,
      },
      {
        id: 3,
        state: 606,
      },
    ];
  }

  findAll() {
    return { repositories: this.repositories };
  }
}
