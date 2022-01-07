type LoginResponse = {
  code: number;
  message: string;
};

export function loginService({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "error@example.com") {
        reject({ code: 401, message: "Email or password does not match" });
      }

      resolve({ code: 200, message: "Login successful" });
    }, 3000);
  });
}
