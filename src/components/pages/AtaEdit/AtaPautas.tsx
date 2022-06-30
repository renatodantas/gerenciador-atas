import { Button, Table } from "react-bootstrap";
import { Pauta } from "../../../models/pauta";

interface AtaPautasProps {
  items: Pauta[];
  onNovaPautaClick: () => void;
  onEditarPautaClick: (index: number) => void;
  onRemoverPautaClick: (index: number) => void;
}

export const AtaPautas = ({
  items,
  onNovaPautaClick,
  onEditarPautaClick,
  onRemoverPautaClick
}: AtaPautasProps) => {

  return (
    <>
      {items.length > 0 && (
        <Table size="sm">
          <thead>
            <tr>
              <th></th>
              <th>Tópico</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((p, index) => (
              <tr key={p.indice}>
                <td>{p.indice}</td>
                <td>{p.topico}</td>
                <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={() => onEditarPautaClick(index)}
                  >
                    <i title="Alterar" className="bi-pencil-square text-primary"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={() => onRemoverPautaClick(index)}
                  >
                    <i title="Excluir" className="bi-x-circle text-danger"></i>
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Button variant="primary" size="sm" onClick={onNovaPautaClick}>
        Adicionar
      </Button>
    </>
  )
}