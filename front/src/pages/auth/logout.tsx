/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import AuthLayout from "../../layout/AuthLayout";

const LogoutPage = () => {
  const { logOut } = useAuth();

  useEffect(() => {
    logOut();
  }, []);

  return (
    <AuthLayout>
      <div className="flex justify-center">
        <div className="shadow-xl border border-gray-200 rounded-md w-96 p-5 flex flex-col gap-5">
          <h2 className="text-center font-semibold text-lg">Выход из системы</h2>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LogoutPage;
