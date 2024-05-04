import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <h2>Perfil</h2>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger><MenuIcon/></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Perfil</MenubarItem>
              <MenubarItem>Editar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </CardContent>
    </Card>
  );
};

export default Header;
