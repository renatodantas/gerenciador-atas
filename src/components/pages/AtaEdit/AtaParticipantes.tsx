import { Button, Table } from "react-bootstrap";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Ata } from "../../../models/ata";

interface AtaParticipantesProps {
  onNovoParticipanteClick: () => void;
  onEditarParticipanteClick: (index: number) => void;
  onRemoverParticipanteClick: (index: number) => void;
}

export const AtaParticipantes = ({ onNovoParticipanteClick, onEditarParticipanteClick, onRemoverParticipanteClick }: AtaParticipantesProps) => {
  const { control, getValues } = useFormContext<Ata>();
  const { fields } = useFieldArray({ control, name: 'participantes' });

  console.log('Passou por aqui:', getValues('participantes'));

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
            {fields.map((fields, index) => (
              <tr key={index}>
                <td>{fields.nome}</td>
                <td>{fields.area}</td>
                <td>{fields.email}</td>
                <td>{fields.presente ? 'Sim' : 'Não'}</td>
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
