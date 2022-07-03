import { nanoid } from "nanoid";
import { FC, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Ata, ATA_DEFAULT_VALUES } from "../../../models/ata";
import { Participante, PARTICIPANTE_DEFAULT_VALUES } from "../../../models/participante";
import { Pauta, PAUTA_DEFAULT_VALUE } from "../../../models/pauta";
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
  } = useFieldArray({ control, name: 'participantes' });
  const {
    append: addPauta,
    remove: removePauta,
    update: editPauta
  } = useFieldArray({ control, name: 'pautas' });

  // ------ Handlers: participantes ------
  const [isModalParticipanteOpen, setIsModalParticipanteOpen] = useState(false);
  const [participante, setParticipante] = useState<Participante>({ ...PARTICIPANTE_DEFAULT_VALUES });
  const participantes = getValues('participantes');

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
  const salvarParticipanteHandler = (data: Participante) => {
    setIsModalParticipanteOpen(false);
    if (!data.id) {
      data.id = nanoid();
      addParticipante(data);
    } else {
      const index = participantes.findIndex(p => p.id === data.id);
      editParticipante(index, data);
    }
  }
  const cancelarEdicaoParticipanteHandler = () => {
    setIsModalParticipanteOpen(false);
  }

  // ------ Handlers: pauta ------
  const [isModalPautaOpen, setIsModalPautaOpen] = useState(false);
  const [pauta, setPauta] = useState<Pauta>({ ...PAUTA_DEFAULT_VALUE });
  const pautas = getValues('pautas');

  const novaPautaHandler = () => {
    setPauta({ ...PAUTA_DEFAULT_VALUE, indice: pautas.length + 1 });
    setIsModalPautaOpen(true);
  }
  const editarPautaHandler = (index: number) => {
    setPauta(pautas[index]);
    setIsModalPautaOpen(true);
  }
  const removerPautaHandler = (index: number) => {
    removePauta(index);
  }
  const salvarPautaHandler = (data: Pauta) => {
    setIsModalPautaOpen(false);
    if (!data.id) {
      data.id = nanoid();
      addParticipante(data);
    } else {
      const index = pautas.findIndex(p => p.id === data.id);
      editPauta(index, data);
    }
  }
  const cancelarEdicaoPautaHandler = () => {
    setIsModalPautaOpen(false);
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
                items={pautas}
                onNovaPautaClick={novaPautaHandler}
                onEditarPautaClick={editarPautaHandler}
                onRemoverPautaClick={removerPautaHandler}
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
        data={pauta}
        isOpen={isModalPautaOpen}
        onSave={salvarPautaHandler}
        onCancel={cancelarEdicaoPautaHandler}
      />
    </Container>
  )
}