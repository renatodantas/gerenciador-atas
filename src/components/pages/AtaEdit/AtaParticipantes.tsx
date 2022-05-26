import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { Ata } from "../../../models/ata";
import { Participante } from "../../../models/participante";
import { AtaParticipanteModal } from "./AtaParticipanteModal";

interface AtaParticipantesProps {
  control: Control<Ata, any>;
  register: UseFormRegister<Ata>;
  // onAddParticipante: (p: Participante) => void;
  // onRemoveParticipante: (index: number) => void;
}

export const AtaParticipantes = ({ control, register }: AtaParticipantesProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'participantes'
  });

  const openModalHandler = () => setIsModalOpen(true);
  const closeModalHandler = (data?: Participante) => {
    if (data) {
      append(data);
    }
    setIsModalOpen(false);
  }

  // const addParticipanteHandler = (participante: Participante) => {
  //   console.log('Chegou:', participante);
  //   onAddParticipante(participante);
  // }

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
            {fields.map((participante, index) => (
              <tr key={participante.email}>
                <td>{participante.nome}</td>
                <td>{participante.area}</td>
                <td>{participante.email}</td>
                <td>{participante.presente ? 'Sim' : 'Não'}</td>
                <td>
                  <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-light" onClick={() => remove(index)}>
                      <i title="Excluir" className="bi-pencil-square text-primary"></i>
                    </button>
                    <button type="button" className="btn btn-outline-light">
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

      <Button variant="primary" size="sm" onClick={openModalHandler}>
        Adicionar
      </Button>

      <AtaParticipanteModal
        openModal={isModalOpen}
        onClose={closeModalHandler}
      />
    </>
  )
}
