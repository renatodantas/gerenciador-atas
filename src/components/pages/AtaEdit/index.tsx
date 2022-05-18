import { FC, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Participante } from "../../../models/participante";
import { Pauta } from "../../../models/pauta";
import { AtaIdentificacao } from "./AtaIdentificacao";
import { AtaFormParticipantes } from "./AtaParticipantes";
import { AtaPautas } from "./AtaPautas";

export const AtaEditPage: FC = () => {
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
          <AtaIdentificacao />
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow">
        <Card.Header>Participantes</Card.Header>
        <Card.Body>
          <AtaFormParticipantes
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