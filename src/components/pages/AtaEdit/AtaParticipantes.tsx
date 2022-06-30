import { Button, Table } from "react-bootstrap";
import { Participante } from "../../../models/participante";

interface AtaParticipantesProps {
  items: Participante[];
  onNovoParticipanteClick: () => void;
  onEditarParticipanteClick: (index: number) => void;
  onRemoverParticipanteClick: (index: number) => void;
}

export const AtaParticipantes = ({
  items,
  onNovoParticipanteClick,
  onEditarParticipanteClick,
  onRemoverParticipanteClick
}: AtaParticipantesProps) => {

  return (
    <>
      {items.length > 0 && (
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
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.area}</td>
                <td>{item.email}</td>
                <td>{item.presente ? 'Sim' : 'Não'}</td>
                <td>
                  <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() => onEditarParticipanteClick(index)}
                    >
                      <i title="Alterar" className="bi-pencil-square text-primary"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() => onRemoverParticipanteClick(index)}
                    >
                      <i title="Excluir" className="bi-x-circle text-danger"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Button variant="primary" size="sm" onClick={onNovoParticipanteClick}>
        Adicionar
      </Button>
    </>
  )
}
