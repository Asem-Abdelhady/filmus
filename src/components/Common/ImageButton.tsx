import {
    Button,
    Image,
  } from "@chakra-ui/react";
  import React from "react";
  
  const ImageButton = ({colorScheme='teal', src, width}) => {
    return (
      <Button colorScheme={colorScheme} variant='outline' size='sm'>
        <Image
          width={width}
          src={src}
          alt='btn_image'
        />
      </Button>
    );
  };
  
  export default ImageButton;
  