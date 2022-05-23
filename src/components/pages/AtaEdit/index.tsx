import { FC, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Participante } from "../../../models/participante";
import { Pauta } from "../../../models/pauta";
import { useFormFields } from "../../../utils/useFormField.hook";
import { AtaIdentificacao } from "./AtaIdentificacao";
import { AtaParticipantes } from "./AtaParticipantes";
import { AtaPautas } from "./AtaPautas";

const dataAtual = new Date().toISOString().split('T')[0];

export const AtaEditPage: FC = () => {

  const { formFields, createChangeHandler } = useFormFields({
    responsavel: '',
    data: '',
    numero: '',
    assunto: '',
    local: 'Virtual via Google Meet',
    horario: '',
  })

  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [pautas, setPautas] = useState<Pauta[]>([]);

  const addParticipante = (participante: Participante) => {
    setParticipantes(current => [...current, participante])
    console.log('participantes:', participantes);
  }
  const addPauta = (pauta: Pauta) => {
    setPautas(current => [...current, pauta])
    console.log('adding pauta:', pauta);
  }
  const removeParticipante = (index: number) => {
    const participantesSemIndex = participantes.filter((_, i) => i !== index)
    setParticipantes(participantesSemIndex)
    console.log('removing participante:', index)
  }
  const removePauta = (index: number) => {
    const pautasSemIndex = pautas.filter((_, i) => i !== index)
    const pautasReindexadas = pautasSemIndex.map((p, i) => ({ ...p, indice: i + 1 }))
    setPautas(pautasReindexadas)
    console.log('removing pauta:', index);
  }

  return (
    <Container className="w-50">
      <h3>Nova Ata</h3>
      <Card className="mb-3 shadow">
        <Card.Header>Identificação da Ata</Card.Header>
        <Card.Body>
          <AtaIdentificacao formFields={formFields} createChangeHandler={createChangeHandler} />
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow">
        <Card.Header>Participantes</Card.Header>
        <Card.Body>
          <AtaParticipantes
            participantes={participantes}
            onAddParticipante={addParticipante}
            onRemoveParticipante={removeParticipante}
          />
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow">
        <Card.Header>Pautas</Card.Header>
        <Card.Body>
          <AtaPautas pautas={pautas} onAddPauta={addPauta} onRemovePauta={removePauta} />
        </Card.Body>
      </Card>

      <Button variant="primary" type="submit">
        <i className="icone-link bi-save-fill" title="Excluir"></i>
        Salvar
      </Button>
    </Container>
  )
}