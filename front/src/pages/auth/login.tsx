import { Link } from "react-router-dom";
import Button from "../../components/common/button/Button";
import TextField from "../../components/common/field/TextField";
import useForm from "../../hooks/useForm";
import AuthLayout from "../../layout/AuthLayout";
import { ObjectData } from "../../types";

const initialData = {
  login: "",
  password: ""
};

const validConfig = {
  login: { isRequired: "" },
  password: { isRequired: "" }
};

const LoginPage = () => {
  const { form, isValid, error, handlerChange, handlerSubmit } = useForm({ initialData, validConfig, onSubmit });

  function onSubmit(data: ObjectData) {}

  return (
    <AuthLayout>
      <div className="flex justify-center">
        <div className="shadow-xl border border-gray-200 rounded-md w-96 p-5 flex flex-col gap-5">
          <h2 className="text-center font-semibold text-lg">Вход</h2>
          <div className="flex flex-col gap-3">
            <TextField label="Логин" name="login" value={form.login} onChange={handlerChange} error={error.login} />
            <TextField
              label="Пароль"
              name="password"
              value={form.password}
              onChange={handlerChange}
              error={error.password}
            />
            <Button onClick={handlerSubmit} disabled={!isValid} color="base">
              Войти
            </Button>
          </div>
          <Link to="/registration" className="text-center hover:text-cyan-600">
            Регистрация
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
