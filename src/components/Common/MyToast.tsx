import { useToast, Button } from "@chakra-ui/react";
import React from "react";

interface ToastProps {
  title: string;
  description: string;
  status: "success" | "error" | "warning" | "info";
}

const showToast = ({ title, description, status }: ToastProps) => {
  const toast = useToast();

  toast({
    title: title,
    description: description,
    status: status,
    duration: 5000,
    isClosable: true,
  });
};

const ToastButton = () => {
  const handleClick = () => {
    showToast({
      title: "Welcome",
      description: "This is an example toast notification",
      status: "success",
    });
  };

  return <Button onClick={handleClick}>Show Toast</Button>;
};

export default ToastButton;
