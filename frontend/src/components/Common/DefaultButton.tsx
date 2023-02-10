import {
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  
  const DefaultButton = ({text}) => {
    return (
      <Button colorScheme='teal' size='sm'>
        {text}
      </Button>
    );
  };
  
  export default DefaultButton;
  