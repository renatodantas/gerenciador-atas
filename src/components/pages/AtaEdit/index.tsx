import { nanoid } from "nanoid";
import { FC, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Ata, ATA_DEFAULT_VALUES } from "../../../models/ata";
import { Participante, PARTICIPANTE_DEFAULT_VALUES } from "../../../models/participante";
import { Pauta } from "../../../models/pauta";
import { AtaIdentificacao } from "./AtaIdentificacao";
import { AtaParticipanteModal } from "./AtaParticipanteModal";
import { AtaParticipantes } from "./AtaParticipantes";
import { AtaPautaModal } from "./AtaPautaModal";
import { AtaPautas } from "./AtaPautas";

// const dataAtual = new Date().toISOString().substring(0, 10);


export const AtaEditPage: FC = () => {

  const formMethods = useForm<Ata>({ defaultValues: { ...ATA_DEFAULT_VALUES } });
  const { handleSubmit, getValues, control } = formMethods;
  const {
    append: addParticipante,
    remove: removeParticipante,
    update: editParticipante
  } = useFieldArray({ control, name: 'participantes' })

  const [isModalParticipanteOpen, setIsModalParticipanteOpen] = useState(false);
  const [participante, setParticipante] = useState<Participante>({ ...PARTICIPANTE_DEFAULT_VALUES });
  const participantes = getValues('participantes');

  // ------ Handlers: participante ------
  const novoParticipanteHandler = () => {
    setParticipante({ ...PARTICIPANTE_DEFAULT_VALUES });
    setIsModalParticipanteOpen(true);
  }
  const editarParticipanteHandler = (index: number) => {
    setParticipante(participantes[index]);
    setIsModalParticipanteOpen(true);
  }
  const removerParticipanteHandler = (index: number) => {
    removeParticipante(index);
  }
  const salvarParticipanteHandler = (dados: Participante) => {
    setIsModalParticipanteOpen(false);
    if (!dados.id) {
      dados.id = nanoid();
      addParticipante(dados);
    } else {
      const index = participantes.findIndex(p => p.id === dados.id);
      editParticipante(index, dados);
    }
  }
  const cancelarEdicaoParticipanteHandler = () => {
    setIsModalParticipanteOpen(false);
  }

  // ------ Handlers: pauta ------
  const novaPautaHandler = (pauta: Pauta) => {
    // const pautas = [...state.pautas, pauta];
    // setState({ pautas });
  }
  const editarPautaHandler = (index: number) => {
    // const participantes = state.participantes.filter((_, i) => i !== index)
    // setState({ participantes })
  }
  const removerPautaHandler = (index: number) => {
    // const pautasSemIndex = state.pautas.filter((_, i) => i !== index)
    // const pautasReindexadas = pautasSemIndex.map((p, i) => ({ ...p, indice: i + 1 }))
    // setState({ pautas: pautasReindexadas })
  }

  // ------ Handlers: ata ------
  const salvarAta = (data: Ata) => {
    console.log('Submit com dados:', data);
  }

  return (
    <Container className="w-50">
      <h3>Nova Ata</h3>

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(salvarAta)}>
          <Card className="mb-3 shadow">
            <Card.Header>Identificação da Ata</Card.Header>
            <Card.Body>
              <AtaIdentificacao />
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow">
            <Card.Header>Participantes</Card.Header>
            <Card.Body>
              <AtaParticipantes
                items={participantes}
                onNovoParticipanteClick={novoParticipanteHandler}
                onEditarParticipanteClick={editarParticipanteHandler}
                onRemoverParticipanteClick={removerParticipanteHandler}
              />
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow">
            <Card.Header>Pautas</Card.Header>
            <Card.Body>
              <AtaPautas
                pautas={[]}
                onAddPauta={novaPautaHandler}
                onRemovePauta={removerPautaHandler}
              />
            </Card.Body>
          </Card>

          <Button variant="primary" type="submit">
            <i className="icone-link bi-save-fill" title="Excluir"></i>
            Salvar
          </Button>
        </form>
      </FormProvider>

      <AtaParticipanteModal
        data={participante}
        isOpen={isModalParticipanteOpen}
        onSave={salvarParticipanteHandler}
        onCancel={cancelarEdicaoParticipanteHandler}
      />

      <AtaPautaModal
        data={pautas}
        isOpen={isModalPautaOpen}
        onSave={closeModalHandler}
        onCancel={addPautaHandler}
      />
    </Container>
  )
}