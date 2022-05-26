import React, { useEffect } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Participante } from "../../../models/participante";

interface AtaParticipanteModalProps {
  participante: Participante;
  openModal: boolean;
  onClose: (dados?: Participante) => void;
}

const LabelCampoObrigatorio = () => (
  <Form.Control.Feedback type="invalid">
    Campo obrigatório
  </Form.Control.Feedback>
)

export const AtaParticipanteModal = ({ participante, openModal, onClose }: AtaParticipanteModalProps) => {
  // const [isPresente, setIsPresente] = useState(true);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Participante>({ shouldUnregister: true });
  // reset(participante);

  useEffect(() => {
    console.log('Modal => Montou', openModal);
    return () => {
      console.log('Modal => Desmontou', openModal);
    }
  })

  const submitHandler = handleSubmit(data => {
    onClose(data);
    reset();
  });

  return (
    <Modal show={openModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Participante</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FloatingLabel className="mb-3" label="Nome" >
          <Form.Control
            type="text"
            placeholder="Nome"
            className={errors.nome && 'is-invalid'}
            {...register("nome", { required: true })}
          />
          <LabelCampoObrigatorio />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Área">
          <Form.Control
            type="text"
            placeholder="Área"
            className={errors.area && 'is-invalid'}
            {...register("area", { required: true })}
          />
          <LabelCampoObrigatorio />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="E-mail">
          <Form.Control
            type="email"
            placeholder="E-mail"
            className={errors.area && 'is-invalid'}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.type === 'pattern' && 'E-mail inválido'}
            {errors.email?.type === 'required' && 'Campo obrigatório'}
          </Form.Control.Feedback>
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Check label="Presente?" {...register("presente")} />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="link" onClick={() => onClose()}>Cancelar</Button>
        <Button variant="primary" size="sm" onClick={submitHandler}>
          <i className="bi-plus-circle-fill fs-6 me-2"></i> Adicionar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}