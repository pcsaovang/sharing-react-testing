import { ChangeEvent, useState } from "react";
import Button from "../../components/Button";
import Message from "../../components/Message";
import { loginService } from "../../service/auth";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

function LoginPage(): React.ReactElement {
  const [logging, setLogging] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginData, setLoginData] = useState<{
    email?: string;
    password?: string;
    remember: string;
  }>({
    email: "",
    password: "",
    remember: "false",
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!loginData.email || !loginData.password) {
      return false;
    }

    try {
      setLogging(true);
      await loginService({
        email: loginData.email,
        password: loginData.password,
      });
      setLogging(false);
      navigate("/");
    } catch (error: any) {
      setErrorMessage(error.message);
      setLogging(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome</h2>
        {errorMessage && <Message content={errorMessage} type="error" />}
        <br />
        <div data-testid="login-form">
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Your email
            </label>
            <Input
              id="email"
              name="email"
              type="text"
              value={loginData.email}
              onChange={handleChange}
              data-testid="input-email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Your password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleChange}
              data-testid="input-password"
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                name="remember"
                value={loginData.remember}
                className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                onChange={handleChange}
                data-testid="input-remember"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm leading-5 text-gray-900"
              >
                {" "}
                Remember me{" "}
              </label>
            </div>
            <a href="/forgot-password" className="text-sm">
              {" "}
              Forgot your password?{" "}
            </a>
          </div>
          <div className="mt-6">
            <Button
              loading={logging}
              disabled={logging}
              data-testid="login-button"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </div>
          <div className="mt-6 text-center">
            <a href="/register" className="underline">
              Sign up for an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
