import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import Logo from "@/assets/logo.svg";
import { Image } from "@nextui-org/image";
import { Button } from "../button/Button";
import Text from "../text/Text";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Support", "Commands", "Status", "Log Out"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#121212] py-2 border-b border-white"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />

        <NavbarItem className="hidden sm:flex">
          <Image src={Logo} alt="Logo" width={60} height={60} />
        </NavbarItem>
        {menuItems.map((item, index) => (
          <NavbarItem key={index} className="hidden sm:flex cursor-pointer">
            <Text variant="span">{item}</Text>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="center" className="sm:hidden">
        <NavbarItem>
          <Image src={Logo} alt="Logo" width={60} height={60} />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="flat"
            className="bg-[#333333] text-white px-4 py-1 text-sm font-medium hover:bg-[#444444] transition-colors"
          >
            Log In
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
