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
  
function ProfilePicture ({url}) {
  return  (
    <Image
      borderRadius='full'
      boxSize='45px'
      src={url}
      alt='Profile picture'
    />
  );
};

const ProfileButton = ({name, surname, imageUrl}) => {
  return (
    <Menu>
      <MenuButton as={Button} colorScheme='none' size='sm'>
        <ProfilePicture url={imageUrl}/>
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
