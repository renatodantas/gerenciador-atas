export interface Participante {
  id?: number;
  nome: string;
  area: string;
  email: string;
  presente: boolean;
}

export const PARTICIPANTE_DEFAULT_VALUES: Participante = {
  nome: '',
  area: '',
  email: '',
  presente: true
}