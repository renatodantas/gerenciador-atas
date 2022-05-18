import { FC, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Participante } from "../../../models/participante";
import { Pauta } from "../../../models/pauta";
import { AtaIdentificacao, AtaIdentificacaoProps } from "./AtaIdentificacao";
import { AtaParticipantes } from "./AtaParticipantes";
import { AtaPautas } from "./AtaPautas";

const dataAtual = new Date().toISOString().split('T')[0];

export const AtaEditPage: FC = () => {

  const [responsavel, setResponsavel] = useState('CSAN');
  const [numero, setNumero] = useState<number | null>(null);
  const [assunto, setAssunto] = useState('');
  const [data, setData] = useState(dataAtual);
  const [local, setLocal] = useState('Virtual via Google Meet');
  const [horario, setHorario] = useState('');
  const identificacao: AtaIdentificacaoProps = {
    responsavel: [responsavel, setResponsavel],
    numero: [numero, setNumero],
    assunto: [assunto, setAssunto],
    data: [data, setData],
    local: [local, setLocal],
    horario: [horario, setHorario],
  }

  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [pautas, setPautas] = useState<Pauta[]>([]);

  const addParticipante = (participante: Participante) => {
    setParticipantes(current => [...current, participante])
    console.log('participantes:', participantes);
  }
  const addPauta = (pauta: Pauta) => {
    setPautas(current => [...current, pauta])
    console.log('pautas:', pautas);
  }

  return (
    <Container className="w-50">
      <h3>Nova Ata</h3>
      <Card className="mb-3 shadow">
        <Card.Header>Identificação da Ata</Card.Header>
        <Card.Body>
          <AtaIdentificacao {...identificacao} />
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow">
        <Card.Header>Participantes</Card.Header>
        <Card.Body>
          <AtaParticipantes
            participantes={participantes}
            onAddParticipante={addParticipante}
          />
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow">
        <Card.Header>Pautas</Card.Header>
        <Card.Body>
          <AtaPautas pautas={pautas} onAddPauta={addPauta} />
        </Card.Body>
      </Card>

      <Button variant="primary" type="submit">
        <i className="icone-link bi-save-fill" title="Excluir"></i>
        Salvar
      </Button>
    </Container>
  )
}