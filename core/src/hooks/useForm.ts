/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export const useForm = <T extends Record<string, string>>({
  initialValues,
  submitHandler,
}: useFormParams<T>) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, boolean>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [valuesDone, setValuesDone] = useState(false);

  const handleChangeInput =
    (validateFunc: ValidateFunc) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTouched({ ...touched, [e.target.name]: true });

      if (!validateFunc(e.target.value)) {
        setErrors({ ...errors, [e.target.name]: true });
        return;
      }
      setErrors({ ...errors, [e.target.name]: false });
      setValues({ ...values, [e.target.name]: e.target.value });
    };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error === true)) {
      return;
    }
    if (Object.keys(touched).length !== Object.keys(initialValues).length) {
      return;
    }

    await submitHandler(values);
  };

  useEffect(() => {
    if (
      Object.keys(touched).length === Object.keys(initialValues).length &&
      Object.keys(errors).every((key) => errors[key] === false)
    ) {
      setValuesDone(true);
    } else {
      setValuesDone(false);
    }
  }, [errors, touched]);

  return {
    valuesDone,
    handleChangeInput,
    handleSubmitForm,
  };
};

type ValidateFunc = (value: string) => boolean;

interface useFormParams<T extends Record<string, string>> {
  initialValues: T;
  submitHandler: (values: T) => void;
}
