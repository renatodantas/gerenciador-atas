import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { UseFormRegister } from "react-hook-form";
import { Ata } from "../../../models/ata";

type AtaIdentificacaoKeys = "responsavel" | "numero" | "assunto" | "data" | "local" | "horario";

export interface AtaIdentificacaoProps {
  register: UseFormRegister<Ata>,
}

export const AtaIdentificacao = ({ register }: AtaIdentificacaoProps) => {
  return (
    <>
      <Row>
        <Col sm='8'>
          <FloatingLabel controlId="responsavel" label="Responsável" className="mb-2">
            <Form.Select aria-label="Responsável" {...register("responsavel")}>
              <option value="EQUIPEA">Equipe A</option>
              <option value="EQUIPEB">Equipe B</option>
              <option value="CT-EQUIPE">CT-Equipe</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel className="mb-2" controlId="numero" label="Número">
            <Form.Control type="number" placeholder="Número" {...register('numero')} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col sm='8'>
          <FloatingLabel className="mb-2" controlId="assunto" label="Assunto">
            <Form.Control type="text" placeholder="Assunto" {...register('assunto')} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel className="mb-2" controlId="data" label="Data">
            <Form.Control type="date" {...register('data')} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col sm='8'>
          <FloatingLabel className="mb-2" controlId="local" label="Local">
            <Form.Control type="text" {...register('local')} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel className="mb-2" controlId="horario" label="Horário">
            <Form.Control type="text" {...register('horario')} />
          </FloatingLabel>
        </Col>
      </Row>
    </>
  )
}