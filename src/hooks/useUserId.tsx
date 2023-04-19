import { useState } from "react";

export default function useToken() {
  const getId = (): string => {
    const tokenString = localStorage.getItem("userId");
    const userId: string = tokenString;
    return userId;
  };

  const [userId, setUserId] = useState(getId());

  const saveId = (userId: string) => {
    localStorage.setItem("userId", userId);
    setUserId(userId);
  };

  return {
    setUserId: saveId,
    userId,
  };
}
