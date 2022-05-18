import { useState } from "react";
import { Button, Col, FormControl, InputGroup, Row, Table } from "react-bootstrap";
import { Pauta } from "../../../models/pauta";

interface AtaPautasProps {
  pautas: Pauta[];
  onAddPauta: (p: Pauta) => void;
}

export const AtaPautas = ({ pautas, onAddPauta }: AtaPautasProps) => {
  const [topico, setTopico] = useState('');
  const addPautaHandler = () => {
    onAddPauta({
      indice: pautas.length + 1,
      topico
    });
    setTopico('');
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
              <tr key={p.topico}>
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
      <Row>
        <Col sm='12'>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Pauta"
              aria-label="Pauta"
              aria-describedby="basic-addon2"
              value={topico}
              onChange={e => setTopico(e.target.value)}
            />
            <Button variant="primary" onClick={addPautaHandler}>
              Adicionar
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </>
  )
}