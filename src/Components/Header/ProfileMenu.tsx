import { Menu, Avatar, rem, Switch } from '@mantine/core';
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout2,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { removeUser } from '../../Slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state:any)=>state.user);
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  const handleLogout = () => {
    dispatch(removeUser());
  }
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="flex cursor-pointer items-center gap-2">
          <div>{user.name}</div>
            <Avatar src="/avatar.png" alt="it's me" />
          </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        <Link to="/profile">
          <Menu.Item leftSection={<IconUserCircle style={{width: rem(14), height: rem(14)}} />}>
            Profile
          </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle style={{width: rem(14), height: rem(14)}} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText style={{width: rem(14), height: rem(14)}} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon style={{width: rem(14), height: rem(14)}} />}
          rightSection={
            <Switch checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              size="md" color="dark.4" onLabel={<IconSun
              style={{width: rem(16), height: rem(16)}} 
              color="yellow" 
              />} offLabel={<IconMoonStars 
                style={{width: rem(16), height: rem(16)}}
                stroke={2.5} 
                color="cyan" />}
            />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item onClick={handleLogout}
          color="red"
          leftSection={<IconLogout2 style={{width: rem(16), height: rem(16)}} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;

function dispatch(arg0: { payload: undefined; type: "user/removeUser"; }) {
  throw new Error('Function not implemented.');
}
