import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function valueChange(event) {
    // const { getAttribute, value } = event.target;
    // setValue(getAttribute('name'), value);
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    values,
    valueChange,
    clearForm,
  };
}

export default useForm;
