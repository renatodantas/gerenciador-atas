import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Participante } from "../../../models/participante";
import { AtaFormParticipanteModal } from "./AtaParticipanteModal";

interface AtaFormParticipantesProps {
  participantes: Participante[];
  onAddParticipante: (p: Participante) => void;
}

export const AtaFormParticipantes = ({ participantes, onAddParticipante }: AtaFormParticipantesProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = () => setIsModalOpen(true);
  const closeModalHandler = () => setIsModalOpen(false);

  const addParticipanteHandler = (participante: Participante) => {
    console.log('Chegou:', participante);
    onAddParticipante(participante);
  }

  return (
    <>
      {participantes.length > 0 && (
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
            {participantes.map(p => (
              <tr key={p.email}>
                <td>{p.nome}</td>
                <td>{p.area}</td>
                <td>{p.email}</td>
                <td>{p.presente ? 'Sim' : 'Nâo'}</td>
                <td>
                  <i className="icone-link bi-x-circle text-danger" title="Excluir"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Button variant="primary" size="sm" onClick={openModalHandler}>
        Adicionar
      </Button>

      <AtaFormParticipanteModal
        openModal={isModalOpen}
        onClose={closeModalHandler}
        onAddParticipante={addParticipanteHandler}
      />
    </>
  )
}
