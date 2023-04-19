import { useState } from "react";

export default function useToken() {
  const getToken = (): string => {
    const tokenString = localStorage.getItem("token");
    const userToken: string = tokenString;
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string) => {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
