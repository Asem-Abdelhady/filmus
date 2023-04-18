import React from "react";
import { Image } from "@chakra-ui/react";
interface IProps {
  pic_path: string;
}

const ProfilePicture = (props: IProps) => {
  return (
    <>
      <Image
        borderRadius="full"
        boxSize="45px"
        src={props.pic_path}
        alt="Profile picture"
      />
    </>
  );
};

export default ProfilePicture;
