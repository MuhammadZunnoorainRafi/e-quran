'use client';

import { useFormState } from 'react-dom';

function Form() {
  const [formState, dispatch] = useFormState(formAction, { errors: {} });

  return <div>Form</div>;
}

export default Form;
