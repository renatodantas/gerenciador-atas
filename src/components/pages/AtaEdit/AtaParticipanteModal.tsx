import React, { useEffect } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Participante } from "../../../models/participante";

interface AtaParticipanteModalProps {
  openModal: boolean;
  onClose: () => void;
  onAddParticipante: (p: Participante) => void;
}

export const AtaParticipanteModal = ({ openModal, onClose, onAddParticipante }: AtaParticipanteModalProps) => {
  // const [isPresente, setIsPresente] = useState(true);
  const { register, handleSubmit } = useForm<Participante>({
    shouldUnregister: true,
    defaultValues: { presente: true }
  });

  useEffect(() => {
    console.log('atualizou');
  }, [])

  // const limparCampos = () => {
  //   setNome('');
  //   setArea('');
  //   setEmail('');
  //   setIsPresente(true);
  // }

  const submitHandler = handleSubmit((data: Participante) => {
    console.log(data);
    onClose();
  });

  return (
    <Modal show={openModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Participante</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FloatingLabel className="mb-3" label="Nome">
          <Form.Control type="text" placeholder="Nome" {...register("nome")} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Área">
          <Form.Control type="text" placeholder="Área" {...register("area")} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="E-mail">
          <Form.Control type="email" placeholder="E-mail" {...register("email")} />
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Check label="Presente?" {...register("presente")} />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="link" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" size="sm" onClick={submitHandler}>
          <i className="bi-plus-circle-fill fs-6 me-2"></i> Adicionar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}