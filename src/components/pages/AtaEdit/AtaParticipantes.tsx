import { FC, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Ata } from "../../../models/ata";
import { Participante } from "../../../models/participante";
import { AtaParticipanteModal } from "./AtaParticipanteModal";

export const AtaParticipantes: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexParticipante, setIndexParticipante] = useState(0);
  const { control, getValues } = useFormContext<Ata>();
  const { fields, remove, append } = useFieldArray({ control, name: 'participantes' });

  // Handlers
  const novoParticipanteHandler = () => {
    // setParticipanteSelecionado(defaultValues);
    // append({ ...PARTICIPANTE_DEFAULT_VALUES });
    // setIndexParticipante(oldIndex => oldIndex + 1);
    setIsModalOpen(true);
  }
  const closeModalHandler = (data?: Participante) => {
    if (data) append(data);
    setIndexParticipante(oldIndex => oldIndex + 1)
    setIsModalOpen(false);
  }
  const editarParticipanteHandler = (index: number) => {
    // setParticipanteSelecionado(participante);
    setIsModalOpen(true);
  }
  const removerParticipanteHandler = (index: number) => {
    console.log('Removendo participante:', index);
    remove(index);
    // getValues('participantes')
  }

  return (
    <>
      {fields.length > 0 && (
        <Table size="sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Área</th>
              <th>E-mail</th>
              <th>Presente</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {false || console.log('Fields:', fields)}
            {fields.map((participante, index) => (
              <tr key={participante.email}>
                <td>{participante.nome}</td>
                <td>{participante.area}</td>
                <td>{participante.email}</td>
                <td>{participante.presente ? 'Sim' : 'Não'}</td>
                <td>
                  <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() => editarParticipanteHandler(index)}
                    >
                      <i title="Alterar" className="bi-pencil-square text-primary"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() => removerParticipanteHandler(index)}
                    >
                      <i title="Excluir" className="bi-x-circle text-danger"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )
      }

      <Button variant="primary" size="sm" onClick={novoParticipanteHandler}>
        Adicionar
      </Button>

      <AtaParticipanteModal
        indexParticipante={indexParticipante}
        isOpen={isModalOpen}
        onClose={closeModalHandler}
      />
    </>
  )
}
