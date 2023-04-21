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
  imageUrl: string;
}

const ProfileButton = (props: IProps) => {
  function logOut() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <Menu>
      <MenuButton as={Button} colorScheme="none" size="sm">
        <ProfilePicture pic_path={props.imageUrl} />
      </MenuButton>
      <MenuList>
        <Link href="/filmus/profile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileButton;
