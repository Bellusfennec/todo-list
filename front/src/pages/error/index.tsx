import { Link } from "react-router-dom";
import ErrorLayout from "../../layout/ErrorLayout";

const ErrorPage = () => {
  return (
    <ErrorLayout>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-xl">Страница не найдена!</h1>
        <p>
          <Link to="/" className="hover:text-cyan-600">
            Назад
          </Link>
        </p>
      </div>
    </ErrorLayout>
  );
};

export default ErrorPage;
