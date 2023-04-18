import {
  Button,
  Image,
  MenuList,
  MenuItem,
  MenuButton,
  Menu,
  Link,
} from "@chakra-ui/react";
import React from "react";
import ProfilePicture from "./ProfilePicture";

interface IProps {
  name: string;
  surname: string;
  imageUrl: string;
}

const ProfileButton = (props: IProps) => {
  return (
    <Menu>
      <MenuButton as={Button} colorScheme="none" size="sm">
        <ProfilePicture pic_path={props.imageUrl} />
      </MenuButton>
      <MenuList>
        <Link href="/filmus/profile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileButton;
