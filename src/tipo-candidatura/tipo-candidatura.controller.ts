import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TipoCandidaturaService } from './tipo-candidatura.service';
import { TipoCandidatura } from './entities/tipo-candidatura.entity';

@Controller('tipo-candidatura')
export class TipoCandidaturaController {
  constructor(private readonly service: TipoCandidaturaService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Post()
  create(@Body() data: TipoCandidatura) {
    return this.service.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }
}
