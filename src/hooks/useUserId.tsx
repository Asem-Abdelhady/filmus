import { useState } from "react";

export default function useToken() {
  const getId = (): string => {
    const tokenString = localStorage.getItem("userId");
    const userId: { userId: string } = JSON.parse(tokenString);
    return userId?.userId;
  };

  const [userId, setUserId] = useState(getId());

  const saveId = (userId: { userId: string }) => {
    localStorage.setItem("userId", JSON.stringify(userId));
    setUserId(userId.userId);
  };

  return {
    setUserId: saveId,
    userId,
  };
}
