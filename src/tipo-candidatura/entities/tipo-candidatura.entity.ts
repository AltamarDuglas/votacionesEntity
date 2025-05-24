import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

@Entity('tipo_candidatura')
export class TipoCandidatura {
  @PrimaryColumn({ type: 'int', width: 2 }) //No se utiliza length, es con width
  @Index()
  id_candidatura: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  descripcion: string;
}
