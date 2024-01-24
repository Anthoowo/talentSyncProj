import { Dropdown } from 'flowbite-react';

export function DropdownComponent({title}) {
  return (
    <Dropdown label={title} inline>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
