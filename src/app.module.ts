import { Module } from '@nestjs/common';
import { RepositoriesModule } from './repositories/repositories.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [RepositoriesModule, OrganizationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
