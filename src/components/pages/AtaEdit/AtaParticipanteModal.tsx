import React, { useEffect } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { Ata } from "../../../models/ata";
import { Participante } from "../../../models/participante";

interface AtaParticipanteModalProps {
  indexParticipante: number;
  isOpen: boolean;
  onClose: (dados?: Participante) => void;
}

const LabelCampoObrigatorio = () => (
  <Form.Control.Feedback type="invalid">
    Campo obrigatório
  </Form.Control.Feedback>
)

export const AtaParticipanteModal = ({ indexParticipante, isOpen, onClose }: AtaParticipanteModalProps) => {
  const { register, reset, /*formState: { errors }*/ } = useFormContext<Ata>();
  const errors: any = {}; // Verificar como validar erros via useFieldArray

  useEffect(() => {
    //if (isOpen) reset(participante);
  }, [isOpen])

  // const submitHandler = handleSubmit(data => onClose(data));
  const submitHandler = () => {
    console.log('submeteu');
    onClose();
  }

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Participante</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FloatingLabel className="mb-3" label="Nome" >
          <Form.Control
            type="text"
            placeholder="Nome"
            className={errors.nome && 'is-invalid'}
            {...register(`participantes.${indexParticipante}.nome`, { required: true })}
          />
          <LabelCampoObrigatorio />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Área">
          <Form.Control
            type="text"
            placeholder="Área"
            className={errors.area && 'is-invalid'}
            {...register(`participantes.${indexParticipante}.area`, { required: true })}
          />
          <LabelCampoObrigatorio />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="E-mail">
          <Form.Control
            type="email"
            placeholder="E-mail"
            className={errors.area && 'is-invalid'}
            {...register(`participantes.${indexParticipante}.email`, { required: true, pattern: /^\S+@\S+$/i })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.type === 'pattern' && 'E-mail inválido'}
            {errors.email?.type === 'required' && 'Campo obrigatório'}
          </Form.Control.Feedback>
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Check label="Presente?" {...register(`participantes.${indexParticipante}.presente`)} />
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