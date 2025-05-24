import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCandidatura } from './entities/tipo-candidatura.entity';
import { TipoCandidaturaService } from './tipo-candidatura.service';
import { TipoCandidaturaController } from './tipo-candidatura.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoCandidatura])],
  controllers: [TipoCandidaturaController],
  providers: [TipoCandidaturaService],
})
export class TipoCandidaturaModule {}
