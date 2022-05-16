import { Col, Form, Row } from "react-bootstrap";

export function AtaFormAssuntos() {
  return (
    <Row>
      <Col sm='8'>
        <Form.Group className="mb-2" controlId="responsavel">
          <Form.Label>Responsável</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-2" controlId="numero">
          <Form.Label>Número</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Col>
    </Row>
  )
}