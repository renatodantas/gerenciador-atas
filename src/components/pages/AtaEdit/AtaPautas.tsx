import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Pauta } from "../../../models/pauta";
import { AtaPautaModal } from "./AtaPautaModal";

interface AtaPautasProps {
  pautas: Pauta[];
  onAddPauta: (p: Pauta) => void;
  onRemovePauta: (index: number) => void;
}

export const AtaPautas = ({ pautas, onAddPauta, onRemovePauta }: AtaPautasProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = () => setIsModalOpen(true);
  const closeModalHandler = () => setIsModalOpen(false);

  const addPautaHandler = (pauta: Pauta) => {
    onAddPauta({
      ...pauta,
      indice: pautas.length + 1,
    });
  }

  const removePautaHandler = (index: number) => onRemovePauta(index);

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
            {pautas.map((p, index) => (
              <tr key={p.indice}>
                <td>{p.indice}</td>
                <td>{p.topico}</td>
                <td style={{ width: '50px' }}>
                  <i className="icone-link bi-x-circle text-danger" title="Excluir" onClick={() => removePautaHandler(index)}></i>
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