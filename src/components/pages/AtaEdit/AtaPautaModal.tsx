import { useEffect } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Pauta } from "../../../models/pauta";
import { TheEditor } from "../../common/Editor";
import { FeedbackLabel } from "../../common/FeedbackLabel";

interface AtaPautaModalProps {
  data: Pauta;
  isOpen: boolean;
  onSave: (data: Pauta) => void;
  onCancel: () => void;
}

export const AtaPautaModal = ({ data, isOpen, onSave, onCancel }: AtaPautaModalProps) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<Pauta>();
  const onSubmit = (submittedData: any) => onSave(submittedData);
  useEffect(() => reset(data), [data]);

  return (
    <Modal show={isOpen} onHide={onCancel} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Editar Pauta</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel label={`${data.indice}º tópico`} >
            <Form.Control
              type="text"
              placeholder="Tópico"
              className={errors.topico && 'is-invalid'}
              {...register(`topico` as const, { required: true })}
            />
            <FeedbackLabel />
          </FloatingLabel>

          {/* <Row>
          <Col sm='10'>
            <FormControl
              as="textarea"
              name="deliberacao"
              placeholder="Deliberação"
              aria-label="Deliberação"
              value={deliberacao}
              onChange={e => setDeliberacao(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary" onClick={addDeliberacaoHandler}>
              Adicionar
            </Button>
          </Col>
        </Row> */}
          <TheEditor />

          <hr />

          <div className="d-flex justify-content-end">
            <Button variant="link" onClick={onCancel}>Cancelar</Button>
            <Button variant="primary" size="sm" type="submit">
              <i className="bi-plus-circle-fill fs-6 me-2"></i> Adicionar
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}