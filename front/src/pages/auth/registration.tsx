import { Link } from "react-router-dom";
import Button from "../../components/common/button/Button";
import TextField from "../../components/common/field/TextField";
import useForm from "../../hooks/useForm";
import AuthLayout from "../../layout/AuthLayout";
import { ObjectData } from "../../types";

const initialData = {
  firstName: "",
  login: "",
  password: ""
};

const validConfig = {
  firstName: { isRequired: "" },
  login: { isRequired: "" },
  password: { isRequired: "" }
};

const RegistrationPage = () => {
  const { form, isValid, error, handlerChange, handlerSubmit } = useForm({ initialData, validConfig, onSubmit });

  function onSubmit(data: ObjectData) {}

  return (
    <AuthLayout>
      <div className="flex justify-center">
        <div className="shadow-xl border border-gray-200 rounded-md w-96 p-5 flex flex-col gap-5">
          <h2 className="text-center font-semibold text-lg">Вход</h2>
          <div className="flex flex-col gap-3">
            <TextField
              label="Ваше Имя"
              name="firstName"
              value={form.firstName}
              onChange={handlerChange}
              error={error.firstName}
            />
            <TextField label="Логин" name="login" value={form.login} onChange={handlerChange} error={error.login} />
            <TextField
              label="Пароль"
              name="password"
              value={form.password}
              onChange={handlerChange}
              error={error.password}
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
