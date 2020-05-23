import { useState } from "react";

const useForm = (changeCallback, submitCallback) => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    submitCallback();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
    changeCallback();
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useForm;
