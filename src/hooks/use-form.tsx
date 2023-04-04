import { useState, ChangeEvent } from 'react';

import { TForm } from '../utils/types';

export function useForm(inputValues: TForm) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}