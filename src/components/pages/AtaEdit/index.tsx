import { FC, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Participante } from "../../../models/participante";
import { AtaFormAssuntos } from "./AtaAssuntos";
import { AtaIdentificacao } from "./AtaIdentificacao";
import { AtaFormParticipantes } from "./AtaParticipantes";

export const AtaEditPage: FC = () => {
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const addParticipante = (participante: Participante) => {
    setParticipantes(current => [...current, participante])
    console.log('participantes:', participantes);
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
        <Card.Header>Assuntos</Card.Header>
        <Card.Body>
          <AtaFormAssuntos />
        </Card.Body>
      </Card>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Container>
  )
}