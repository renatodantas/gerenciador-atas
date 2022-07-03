export interface Pauta {
  id?: string;
  indice: number;
  topico: string;
  descricao: string;
  deliberacao: string;
}

export const PAUTA_DEFAULT_VALUE: Pauta = {
  indice: 1,
  topico: '',
  descricao: '',
  deliberacao: ''
}