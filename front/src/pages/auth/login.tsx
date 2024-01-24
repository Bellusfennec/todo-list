import { Link } from "react-router-dom";
import Button from "../../components/common/button/Button";
import TextField from "../../components/common/field/TextField";
import { useAuth } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import AuthLayout from "../../layout/AuthLayout";
import { ObjectData } from "../../types";

const initialData = {
  email: "",
  password: ""
};

const validConfig = {
  email: { isRequired: "" },
  password: { isRequired: "" }
};

const LoginPage = () => {
  const { logIn } = useAuth();
  const { form, isValid, error, handlerChange, handlerSubmit } = useForm({ initialData, validConfig, onSubmit });

  function onSubmit(data: ObjectData) {
    logIn(data);
  }

  return (
    <AuthLayout>
      <div className="flex justify-center">
        <div className="shadow-xl border border-gray-200 rounded-md w-96 p-5 flex flex-col gap-5">
          <h2 className="text-center font-semibold text-lg">Вход</h2>
          <div className="flex flex-col gap-3">
            <TextField label="Email" name="email" value={form.email} onChange={handlerChange} error={error.email} />
            <TextField
              type="password"
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
