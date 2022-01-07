import { act, fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "../../../../src/pages/Auth/Login";
import { BrowserRouter } from "react-router-dom";

const loginService = jest.fn();

jest.mock("../../../../src/service/auth", () => {
  return {
    loginService: () => loginService(),
  };
});

afterEach(() => {
  loginService.mockClear();
});

describe("Login page", () => {
  it("Should call api when email and password correct", async () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "email@example.com" },
    });

    fireEvent.change(screen.getByTestId("input-password"), {
      target: { value: "123" },
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await fireEvent.click(screen.getByTestId("login-button"));
    });

    expect(loginService).toHaveBeenCalledTimes(1);
  });

  it("Should call api when email and password incorrect", async () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await fireEvent.click(screen.getByTestId("login-button"));
    });

    expect(loginService).toHaveBeenCalledTimes(0);
  });
});
