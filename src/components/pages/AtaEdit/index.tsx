import { FC } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Ata } from "../../../models/ata";
import { Participante } from "../../../models/participante";
import { Pauta } from "../../../models/pauta";
import { AtaIdentificacao } from "./AtaIdentificacao";
import { AtaParticipantes } from "./AtaParticipantes";
import { AtaPautas } from "./AtaPautas";

export const AtaEditPage: FC = () => {

  const { control, register, handleSubmit } = useForm<Ata>();

  // const [participantes, setParticipantes] = useState<Participante[]>([]);
  // const [pautas, setPautas] = useState<Pauta[]>([]);

  const addParticipante = (participante: Participante) => {
    // const participantes = [...state.participantes, participante];
    // setState({ participantes })
  }
  const addPauta = (pauta: Pauta) => {
    // const pautas = [...state.pautas, pauta];
    // setState({ pautas });
  }
  const removeParticipante = (index: number) => {
    // const participantes = state.participantes.filter((_, i) => i !== index)
    // setState({ participantes })
  }
  const removePauta = (index: number) => {
    // const pautasSemIndex = state.pautas.filter((_, i) => i !== index)
    // const pautasReindexadas = pautasSemIndex.map((p, i) => ({ ...p, indice: i + 1 }))
    // setState({ pautas: pautasReindexadas })
  }

  const salvarAta = handleSubmit(data => console.log(data));

  return (
    <Container className="w-50">
      <h3>Nova Ata</h3>
      <form onSubmit={salvarAta}>
        <Card className="mb-3 shadow">
          <Card.Header>Identificação da Ata</Card.Header>
          <Card.Body>
            <AtaIdentificacao register={register} />
          </Card.Body>
        </Card>

        <Card className="mb-3 shadow">
          <Card.Header>Participantes</Card.Header>
          <Card.Body>
            <AtaParticipantes
              participantes={[]}
              onAddParticipante={addParticipante}
              onRemoveParticipante={removeParticipante}
            />
          </Card.Body>
        </Card>

        <Card className="mb-3 shadow">
          <Card.Header>Pautas</Card.Header>
          <Card.Body>
            <AtaPautas pautas={[]} onAddPauta={addPauta} onRemovePauta={removePauta} />
          </Card.Body>
        </Card>

        <Button variant="primary" type="submit">
          <i className="icone-link bi-save-fill" title="Excluir"></i>
          Salvar
        </Button>
      </form>
    </Container>
  )
}