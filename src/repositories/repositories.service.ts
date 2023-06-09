import { Injectable } from '@nestjs/common';
import { Verification } from './interfaces/verification.interface';

@Injectable()
export class RepositoriesService {
  private readonly repositories: Verification[];

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
