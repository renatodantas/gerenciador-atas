import { Participante } from "./participante";
import { Pauta } from "./pauta";

export interface Ata {
  id?: number;
  responsavel: string;
  assunto: string;
  local: string;
  numero?: number;
  data: string;
  horario: string;
  participantes: Participante[];
  pautas: Pauta[];
}