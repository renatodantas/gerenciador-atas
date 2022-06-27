import { FC, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Ata } from "../../../models/ata";
import { PARTICIPANTE_DEFAULT_VALUES } from "../../../models/participante";
import { AtaParticipanteModal } from "./AtaParticipanteModal";

export const AtaParticipantes: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexParticipante, setIndexParticipante] = useState(0);
  const [isNovoParticipante, setIsNovoParticipante] = useState(false);
  const { control, getValues } = useFormContext<Ata>();
  const { fields, remove, append } = useFieldArray({ control, name: 'participantes' });

  // Handlers
  const novoParticipanteHandler = () => {
    // setParticipanteSelecionado(defaultValues);
    append({ ...PARTICIPANTE_DEFAULT_VALUES });
    setIsNovoParticipante(true);
    setIndexParticipante(getValues('participantes').length - 1);
    setIsModalOpen(true);
  }
  const editarParticipanteHandler = (index: number) => {
    setIsNovoParticipante(false);
    setIndexParticipante(index);
    setIsModalOpen(true);
  }
  const cancelarEdicaoHandler = () => {
    if (isNovoParticipante) {
      remove(indexParticipante);
    }
    setIsModalOpen(false);
  }
  const salvarParticipanteHandler = () => {
    console.log('salvando...');
    setIsModalOpen(false);
  }
  const removerParticipanteHandler = (index: number) => {
    console.log('Removendo participante:', index);
    remove(index);
  }

  console.log('qtos participantes?', getValues('participantes'));

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
            {fields.map((field, index) => (
              <tr key={field.id}>
                <td>{field.nome}</td>
                <td>{field.area}</td>
                <td>{field.email}</td>
                <td>{field.presente ? 'Sim' : 'Não'}</td>
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

      {isModalOpen &&
        <AtaParticipanteModal
          indexParticipante={indexParticipante}
          isOpen={isModalOpen}
          onSave={salvarParticipanteHandler}
          onCancel={cancelarEdicaoHandler}
        />
      }
    </>
  )
}
