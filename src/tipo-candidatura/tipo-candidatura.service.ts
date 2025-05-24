import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoCandidatura } from './entities/tipo-candidatura.entity';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class TipoCandidaturaService {
  constructor(
    @InjectRepository(TipoCandidatura)
    private readonly tipoCandidaturaRepository: Repository<TipoCandidatura>,
  ) {}

  findAll() {
    return this.tipoCandidaturaRepository.find();
  }

  findOne(id: number) {
    return this.tipoCandidaturaRepository.findOneBy({ id_candidatura: id });
  }

  create(data: TipoCandidatura) {
    return this.tipoCandidaturaRepository.save(data);
  }

  async remove(id: number) {
    const entity = await this.findOne(id);
    if (!entity) {
      throw new NotFoundException(`TipoCandidatura con id ${id} no encontrada.`);
    }
    return this.tipoCandidaturaRepository.remove(entity);
  }
}
