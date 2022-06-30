import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Pauta } from "../../../models/pauta";

interface AtaPautasProps {

}

export const AtaPautas = ({ }: AtaPautasProps) => {


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
            {pautas.map((p, index) => (
              <tr key={p.indice}>
                <td>{p.indice}</td>
                <td>{p.topico}</td>
                <td style={{ width: '50px' }}>
                  <i className="icone-link bi-x-circle text-danger" title="Excluir" onClick={() => onRemovePauta(index)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Button variant="primary" size="sm" onClick={openModalHandler}>
        Adicionar
      </Button>
    </>
  )
}