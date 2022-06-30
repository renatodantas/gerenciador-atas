import React, { FormEvent, useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal, Table } from "react-bootstrap";
import { Pauta } from "../../../models/pauta";
import { TheEditor } from "../../common/Editor";

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

  const limparCampos = () => {
    setTopico('');
    //setDescricao('');
    setDeliberacoes([]);
  }

  const addDeliberacaoHandler = () => {
    setDeliberacoes(current => [...current, deliberacao]);
    setDeliberacao('');
  }

  const removeDeliberacaoHandler = (index: number) => {
    setDeliberacoes(current => [...current.splice(index, 1)])
  }

  const submitHandler = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onAddPauta({ topico, descricao: 'descricao', deliberacoes });
    limparCampos();
    onClose();
  }


  return (
    <Modal show={openModal} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Participante</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FloatingLabel className="mb-3" label="Tópico">
          <Form.Control type="text" name="topico" placeholder="Tópico" value={topico} onChange={e => setTopico(e.target.value)} />
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

        {deliberacoes.length > 0 && (
          <Table size="sm" className="mt-3">
            <thead>
              <tr>
                <th></th>
                <th>Deliberação</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {deliberacoes.map((d, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{d}</td>
                  <td style={{ width: '50px' }}>
                    <i className="icone-link bi-x-circle text-danger" title="Excluir" onClick={() => removeDeliberacaoHandler(index)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
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