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

export const ATA_DEFAULT_VALUES: Ata = {
  responsavel: '',
  assunto: '',
  horario: '',
  data: new Date().toISOString().substring(0, 10),
  local: 'Virtual (Google Meet)',
  participantes: [],
  pautas: []
}