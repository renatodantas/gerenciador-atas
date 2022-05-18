import { Pauta } from "./pauta";
import { Participante } from "./participante";

export interface Ata {
  id?: number;
  responsavel: string;
  assunto: string;
  local: string;
  numero?: number;
  data: Date;
  horario: string;
  participantes: Participante[];
  assuntos: Pauta[];
}