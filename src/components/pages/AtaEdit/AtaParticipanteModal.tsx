import React from "react";
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
  const { register, reset, watch, getValues /*formState: { errors }*/ } = useFormContext<Ata>();
  const errors: any = {}; // Verificar como validar erros via useFieldArray

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log(value.participantes, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watch, isOpen])

  // const submitHandler = handleSubmit(data => onClose(data));
  const submitHandler = () => {
    console.log('lista', getValues('participantes'));
    console.log('submeteu');
    onClose();
  }

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Participante (index: {indexParticipante})</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FloatingLabel className="mb-3" label="Nome" >
          <Form.Control
            type="text"
            placeholder="Nome"
            className={errors.nome && 'is-invalid'}
            {...register(`participantes.${indexParticipante}.nome` as const, { required: true })}
          />
          <LabelCampoObrigatorio />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Área">
          <Form.Control
            type="text"
            placeholder="Área"
            className={errors.area && 'is-invalid'}
            {...register(`participantes.${indexParticipante}.area` as const, { required: true })}
          />
          <LabelCampoObrigatorio />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="E-mail">
          <Form.Control
            type="email"
            placeholder="E-mail"
            className={errors.area && 'is-invalid'}
            {...register(`participantes.${indexParticipante}.email` as const, { required: true, pattern: /^\S+@\S+$/i })}
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