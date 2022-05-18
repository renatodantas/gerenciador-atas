import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";

export function AtaPautas() {
  return (
    <Row>
      <Col sm='12'>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Pauta"
            aria-label="Pauta"
            aria-describedby="basic-addon2"
          />
          <Button variant="primary">
            Adicionar
          </Button>
        </InputGroup>
      </Col>
    </Row>
  )
}