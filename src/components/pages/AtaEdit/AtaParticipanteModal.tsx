import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { Ata } from "../../../models/ata";

interface AtaParticipanteModalProps {
  indexParticipante: number;
  isOpen: boolean;
  //onSave: (dados?: Participante) => void;
  onSave: () => void;
  onCancel: () => void;
}

const LabelCampoObrigatorio = () => (
  <Form.Control.Feedback type="invalid">
    Campo obrigatório
  </Form.Control.Feedback>
)

export const AtaParticipanteModal = ({ indexParticipante, isOpen, onSave, onCancel }: AtaParticipanteModalProps) => {
  const { register, reset, watch, getValues, trigger, formState: { errors } } = useFormContext<Ata>();
  // const errors: any = {}; // Verificar como validar erros via useFieldArray

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log(value.participantes, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watch, isOpen])

  const submitHandler = async () => {
    const isValid = await trigger([
      `participantes.${indexParticipante}.nome`,
      `participantes.${indexParticipante}.area`,
      `participantes.${indexParticipante}.email`,
    ])
    if (isValid) {
      onSave();
    }
  }

  return (
    <Modal show={isOpen} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Participante (index: {indexParticipante})</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FloatingLabel className="mb-3" label="Nome" >
          <Form.Control
            type="text"
            placeholder="Nome"
            className={errors.participantes?.[indexParticipante]?.nome && 'is-invalid'}
            {...register(`participantes.${indexParticipante}.nome` as const, { required: true })}
          />
          <LabelCampoObrigatorio />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Área">
          <Form.Control
            type="text"
            placeholder="Área"
            className={errors.participantes?.[indexParticipante]?.area && 'is-invalid'}
            {...register(`participantes.${indexParticipante}.area` as const, { required: true })}
          />
          <LabelCampoObrigatorio />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="E-mail">
          <Form.Control
            type="email"
            placeholder="E-mail"
            className={errors.participantes?.[indexParticipante]?.email && 'is-invalid'}
            {...register(`participantes.${indexParticipante}.email` as const, { required: true, pattern: /^\S+@\S+$/i })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.participantes?.[indexParticipante]?.email?.type === 'pattern' && 'E-mail inválido'}
            {errors.participantes?.[indexParticipante]?.email?.type === 'required' && 'Campo obrigatório'}
          </Form.Control.Feedback>
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Check label="Presente?" {...register(`participantes.${indexParticipante}.presente`)} />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="link" onClick={onCancel}>Cancelar</Button>
        <Button variant="primary" size="sm" onClick={submitHandler}>
          <i className="bi-plus-circle-fill fs-6 me-2"></i> Adicionar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}