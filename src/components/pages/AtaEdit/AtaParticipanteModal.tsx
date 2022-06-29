import { useEffect } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Participante } from "../../../models/participante";

interface AtaParticipanteModalProps {
  data: Participante;
  isOpen: boolean;
  //onSave: (dados?: Participante) => void;
  onSave: (data: Participante) => void;
  onCancel: () => void;
}

const LabelCampoObrigatorio = () => (
  <Form.Control.Feedback type="invalid">
    Campo obrigatório
  </Form.Control.Feedback>
)

export const AtaParticipanteModal = ({ data, isOpen, onSave, onCancel }: AtaParticipanteModalProps) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<Participante>();

  useEffect(() => reset(data), [data]);
  // const errors: any = {}; // Verificar como validar erros via useFieldArray

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log(value.participantes, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watch, isOpen])

  const onSubmit = (submittedData: any) => onSave(submittedData);

  return (
    <Modal show={isOpen} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Participante</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel className="mb-3" label="Nome" >
            <Form.Control
              type="text"
              placeholder="Nome"
              className={errors.nome && 'is-invalid'}
              {...register(`nome` as const, { required: true })}
            />
            <LabelCampoObrigatorio />
          </FloatingLabel>

          <FloatingLabel className="mb-3" label="Área">
            <Form.Control
              type="text"
              placeholder="Área"
              className={errors.area && 'is-invalid'}
              {...register(`area` as const, { required: true })}
            />
            <LabelCampoObrigatorio />
          </FloatingLabel>

          <FloatingLabel className="mb-3" label="E-mail">
            <Form.Control
              type="email"
              placeholder="E-mail"
              className={errors.email && 'is-invalid'}
              {...register(`email` as const, { required: true, pattern: /^\S+@\S+$/i })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.type === 'pattern' && 'E-mail inválido'}
              {errors.email?.type === 'required' && 'Campo obrigatório'}
            </Form.Control.Feedback>
          </FloatingLabel>

          <Form.Group className="mb-3">
            <Form.Check label="Presente?" {...register(`presente`)} />
          </Form.Group>
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