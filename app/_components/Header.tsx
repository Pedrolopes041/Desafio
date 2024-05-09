import { Card, CardContent } from "./ui/card";
import { MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import Link from "next/link";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
          <Link href="/">
            <h2 className="text-xl animate-pulse">Form <span className="animate-pulse">Update</span></h2>
          </Link>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <MenuIcon />
            </MenubarTrigger>
            <MenubarContent className="flex flex-col justify-center items-center">
              <Link href="/">
                <MenubarItem>Profile</MenubarItem>
              </Link>
              <Link href="/profile">
                <MenubarItem>Edit</MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </CardContent>
    </Card>
  );
};

export default Header;
