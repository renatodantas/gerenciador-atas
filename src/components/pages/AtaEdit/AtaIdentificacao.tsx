import { Dispatch, SetStateAction } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

export interface AtaIdentificacaoProps {
  responsavel: [string, Dispatch<SetStateAction<string>>],
  numero: [number | null, Dispatch<SetStateAction<number | null>>],
  assunto: [string, Dispatch<SetStateAction<string>>],
  data: [string, Dispatch<SetStateAction<string>>],
  local: [string, Dispatch<SetStateAction<string>>],
  horario: [string, Dispatch<SetStateAction<string>>],
}

export const AtaIdentificacao = (props: AtaIdentificacaoProps) => {
  const [responsavel, setResponsavel] = props.responsavel;
  const [numero, setNumero] = props.numero;
  const [assunto, setAssunto] = props.assunto;
  const [data, setData] = props.data;
  const [local, setLocal] = props.local;
  const [horario, setHorario] = props.horario;

  return (
    <>
      <Row>
        <Col sm='8'>
          <FloatingLabel controlId="responsavel" label="Responsável" className="mb-2">
            <Form.Select aria-label="Responsável" value={responsavel} onChange={e => setResponsavel(e.target.value)}>
              <option value="EQUIPEA">Equipe A</option>
              <option value="EQUIPEB">Equipe B</option>
              <option value="CT-EQUIPE">CT-Equipe</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel className="mb-2" controlId="numero" label="Número">
            <Form.Control type="number" value={(numero || '')} placeholder="Número" onChange={e => setNumero(+e.target.value || null)} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col sm='8'>
          <FloatingLabel className="mb-2" controlId="assunto" label="Assunto">
            <Form.Control type="text" value={assunto} placeholder="Assunto" onChange={e => setAssunto(e.target.value)} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel className="mb-2" controlId="data" label="Data">
            <Form.Control type="date" value={data} onChange={e => setData(e.target.value)} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col sm='8'>
          <FloatingLabel className="mb-2" controlId="local" label="Local">
            <Form.Control type="text" value={local} onChange={e => setLocal(e.target.value)} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel className="mb-2" controlId="horario" label="Horário">
            <Form.Control type="text" value={horario} onChange={e => setHorario(e.target.value)} />
          </FloatingLabel>
        </Col>
      </Row>
    </>
  )
}