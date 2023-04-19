import { useState } from "react";

export default function useToken() {
  const getToken = (): string => {
    const tokenString = localStorage.getItem("token");
    const userToken: { token: string } = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: { token: string }) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
