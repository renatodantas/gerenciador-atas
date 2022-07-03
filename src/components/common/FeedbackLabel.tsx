import { Form } from "react-bootstrap";

const DEFAULT_LABEL = "Campo obrigatório";

interface FeedbackLabelProps {
  label?: string;
}

/**
 * Usado para apresentar informações de feedback no formulário.
 * Se não apresentar nada, 
 * @param label texto a apresentar no componente; default: "campo obrigatório" 
 */
export const FeedbackLabel = ({ label = DEFAULT_LABEL }: FeedbackLabelProps) => (
  <Form.Control.Feedback type="invalid">
    {label}
  </Form.Control.Feedback>
)