import React, { FormEvent, useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { Participante } from "../../../models/participante";

interface AtaFormParticipanteModalProps {
  openModal: boolean;
  onClose: () => void;
  onAddParticipante: (p: Participante) => void;
}

export const AtaFormParticipanteModal = ({ openModal, onClose, onAddParticipante }: AtaFormParticipanteModalProps) => {
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('');
  const [email, setEmail] = useState('');
  const [isPresente, setIsPresente] = useState(true);
  console.log('isPresente: ', isPresente);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => () => {
    console.log('[DESMONTOU]');
    setNome('');
    setArea('');
    setEmail('');
    setIsPresente(true);
  });

  const submitHandler = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onAddParticipante({ nome, area, email, presente: isPresente });
    onClose();
  }

  return (
    <Modal show={openModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Participante</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FloatingLabel className="mb-3" label="Nome">
          <Form.Control type="text" name="nome" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Área">
          <Form.Control type="text" name="area" placeholder="Área" value={area} onChange={e => setArea(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="E-mail">
          <Form.Control type="email" name="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Check label="Presente?" name="presente" checked={isPresente} onChange={e => setIsPresente(e.target.checked)} />
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