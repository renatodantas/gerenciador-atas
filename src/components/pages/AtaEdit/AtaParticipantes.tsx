import { Fragment, useState } from "react";
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
          <tr>
            {participantes.length === 0 ? (
              <td colSpan={5} className="text-center">Nenhum participante cadastrado</td>
            ) :
              participantes.map(p => (
                <Fragment key={p.email}>
                  <td>{p.nome}</td>
                  <td>{p.area}</td>
                  <td>{p.email}</td>
                  <td>{p.presente ? 'Sim' : 'Nâo'}</td>
                  <td></td>
                </Fragment>
              ))}
          </tr>
        </tbody>
      </Table>

      <Button variant="primary" size="sm" onClick={openModalHandler}>
        Adicionar Participante
      </Button>

      <AtaFormParticipanteModal
        openModal={isModalOpen}
        onCloseModal={closeModalHandler}
        onAddParticipante={addParticipanteHandler}
      />
    </>
  )
}
