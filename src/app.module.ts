import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCandidaturaModule } from './tipo-candidatura/tipo-candidatura.module';
import { TipoCandidatura } from './tipo-candidatura/entities/tipo-candidatura.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'passBaseDatosPC',
      database: 'votaciones',
      entities: [TipoCandidatura],
      synchronize: true,
    }),
    TipoCandidaturaModule,
  ],
})
export class AppModule {}
