import { ChangeEvent, useState } from "react";

export type UseFormElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Gera hooks para uso em forms.
 * 
 * @param initialValues valor inicial do input
 * @see https://blog.logrocket.com/forms-in-react-in-2020/
 * @returns objetos para uso no form
 */
export function useFormFields<T>(initialValues: T) {
  const [formFields, setFormFields] = useState<T>(initialValues);
  const createChangeHandler = (key: keyof T) => (e: ChangeEvent<UseFormElements>) => {
    const value = Object.keys(e).includes('checked')
      ? (<HTMLInputElement>e.target).checked
      : e.target.value;
    setFormFields((prev: T) => ({ ...prev, [key]: value }));
  };
  return { formFields, createChangeHandler };
}