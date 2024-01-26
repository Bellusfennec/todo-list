/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import Button from "../../components/common/button/Button";
import TextField from "../../components/common/field/TextField";
import { useAuth } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import AuthLayout from "../../layout/AuthLayout";
import { ObjectData } from "../../types";
import { useEffect } from "react";

const initialData = {
  firstName: "",
  email: "",
  password: ""
};

const validConfig = {
  email: { isRequired: "" },
  password: { isRequired: "" }
};

const RegistrationPage = () => {
  const { signUp, error: errorAuth } = useAuth();
  const { form, isValid, error, setError, handlerChange, handlerSubmit } = useForm({
    initialData,
    validConfig,
    onSubmit
  });

  function onSubmit(data: ObjectData) {
    signUp(data);
  }

  useEffect(() => {
    if (errorAuth?.email !== "" || errorAuth?.password !== "") {
      setError(errorAuth);
    }
  }, [errorAuth]);

  return (
    <AuthLayout>
      <div className="flex justify-center">
        <div className="shadow-xl border border-gray-200 rounded-md w-96 p-5 flex flex-col gap-5">
          <h2 className="text-center font-semibold text-lg">Регистрация</h2>
          <div className="flex flex-col gap-3">
            <TextField
              label="Ваше Имя"
              name="firstName"
              value={form.firstName}
              onChange={handlerChange}
              error={error?.firstName}
            />
            <TextField label="Email" name="email" value={form.email} onChange={handlerChange} error={error?.email} />
            <TextField
              type="password"
              label="Пароль"
              name="password"
              value={form.password}
              onChange={handlerChange}
              error={error?.password}
            />
            <Button onClick={handlerSubmit} disabled={!isValid} color="base">
              Зарегистрироватся
            </Button>
          </div>
          <Link to="/login" className="text-center hover:text-cyan-600">
            У меня есть аккаунт
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegistrationPage;
