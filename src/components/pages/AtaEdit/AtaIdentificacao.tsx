import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { UseFormElements } from "../../../utils/useFormField.hook";

type AtaIdentificacaoKeys = "responsavel" | "numero" | "assunto" | "data" | "local" | "horario";

export interface AtaIdentificacaoProps {
  formFields: {
    responsavel: string,
    numero: string,
    assunto: string,
    data: string,
    local: string,
    horario: string,
  },
  createChangeHandler: (key: AtaIdentificacaoKeys) => (e: React.ChangeEvent<UseFormElements>) => void;
}

export const AtaIdentificacao = ({ formFields, createChangeHandler }: AtaIdentificacaoProps) => {
  return (
    <>
      <Row>
        <Col sm='8'>
          <FloatingLabel controlId="responsavel" label="Responsável" className="mb-2">
            <Form.Select aria-label="Responsável" value={formFields.responsavel} onChange={createChangeHandler("responsavel")}>
              <option value="EQUIPEA">Equipe A</option>
              <option value="EQUIPEB">Equipe B</option>
              <option value="CT-EQUIPE">CT-Equipe</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel className="mb-2" controlId="numero" label="Número">
            <Form.Control type="number" value={formFields.numero} placeholder="Número" onChange={createChangeHandler('numero')} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col sm='8'>
          <FloatingLabel className="mb-2" controlId="assunto" label="Assunto">
            <Form.Control type="text" value={formFields.assunto} placeholder="Assunto" onChange={createChangeHandler('assunto')} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel className="mb-2" controlId="data" label="Data">
            <Form.Control type="date" value={formFields.data} onChange={createChangeHandler('data')} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col sm='8'>
          <FloatingLabel className="mb-2" controlId="local" label="Local">
            <Form.Control type="text" value={formFields.local} onChange={createChangeHandler('local')} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel className="mb-2" controlId="horario" label="Horário">
            <Form.Control type="text" value={formFields.horario} onChange={createChangeHandler('horario')} />
          </FloatingLabel>
        </Col>
      </Row>
    </>
  )
}