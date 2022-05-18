import { useState } from "react";
import { Button, Col, FormControl, InputGroup, Row, Table } from "react-bootstrap";
import { Pauta } from "../../../models/pauta";
import { AtaPautaModal } from "./AtaPautaModal";

interface AtaPautasProps {
  pautas: Pauta[];
  onAddPauta: (p: Pauta) => void;
}

export const AtaPautas = ({ pautas, onAddPauta }: AtaPautasProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = () => setIsModalOpen(true);
  const closeModalHandler = () => setIsModalOpen(false);

  const addPautaHandler = (pauta: Pauta) => {
    onAddPauta({
      ...pauta,
      indice: pautas.length + 1,
    });
  }

  return (
    <>
      {pautas.length > 0 && (
        <Table size="sm">
          <thead>
            <tr>
              <th></th>
              <th>Tópico</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pautas.map(p => (
              <tr key={p.indice}>
                <td>{p.indice}</td>
                <td>{p.topico}</td>
                <td style={{ width: '50px' }}>
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

      <AtaPautaModal
        openModal={isModalOpen}
        onClose={closeModalHandler}
        onAddPauta={addPautaHandler}
      />
    </>
  )
}