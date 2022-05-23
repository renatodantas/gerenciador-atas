import React, { FormEvent, useEffect } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { Participante } from "../../../models/participante";
import { useFormFields } from "../../../utils/useFormField.hook";

interface AtaParticipanteModalProps {
  openModal: boolean;
  onClose: () => void;
  onAddParticipante: (p: Participante) => void;
}

export const AtaParticipanteModal = ({ openModal, onClose, onAddParticipante }: AtaParticipanteModalProps) => {
  // const [isPresente, setIsPresente] = useState(true);
  const { formFields, createChangeHandler } = useFormFields({
    nome: '',
    area: '',
    email: '',
    isPresente: true,
  })
  console.log('Filds:', formFields);

  useEffect(() => {
    console.log('atualizou');
  }, [])

  // const limparCampos = () => {
  //   setNome('');
  //   setArea('');
  //   setEmail('');
  //   setIsPresente(true);
  // }

  const submitHandler = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onAddParticipante({
      nome: formFields.nome,
      area: formFields.area,
      email: formFields.email,
      presente: formFields.isPresente
    });
    // limparCampos();
    onClose();
  }

  return (
    <Modal show={openModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Participante</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FloatingLabel className="mb-3" label="Nome">
          <Form.Control type="text" name="nome" placeholder="Nome" value={formFields.nome} onChange={createChangeHandler('nome')} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Área">
          <Form.Control type="text" name="area" placeholder="Área" value={formFields.area} onChange={createChangeHandler('area')} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="E-mail">
          <Form.Control type="email" name="email" placeholder="E-mail" value={formFields.email} onChange={createChangeHandler('email')} />
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Check label="Presente?" name="presente" checked={formFields.isPresente} onChange={createChangeHandler('isPresente')} />
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