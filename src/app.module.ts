import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoriesModule } from './repositories/repositories.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RepositoriesModule,
    OrganizationModule,
    //TODO: Encryption
    TypeOrmModule.forRoot({
      type: 'cockroachdb',
      host: 'sky-catfish-3738.g8z.cockroachlabs.cloud',
      port: 26257,
      database: 'deuna',
      username: 'avasquez',
      password: 'OpCU-t2EfTqGrGzFAdROYg',
      ssl: {
        rejectUnauthorized: false, // Set to true if server has a valid SSL certificate
      },
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
