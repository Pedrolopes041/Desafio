import Image from "next/image";
import { Card, CardContent } from "../_components/ui/card";
import { Button } from "../_components/ui/button";
import Link from "next/link";

import { Pessoa } from "@prisma/client";

const CardItem = async () => {
  return (
    <Card className="mt-6">
      <CardContent className="mt-6 flex flex-col justify-center items-center">
        <div className="rounded-full overflow-hidden w-32 h-32 mb-6">
          <Image
            src="/soulindo.jpg"
            alt="fsw-Barber"
            width={130}
            height={130}
            className="rounded-full"
          />
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <div className="space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-none"></p>
            </div>
          </div>
          <div className="space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-none">
                <span> anos</span>
              </p>
            </div>
          </div>
          <div className="space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-none"></p>
            </div>
          </div>
          <div className="space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-normal"></p>
            </div>
          </div>
          <Link href="/perfil" className="w-full">
            <Button variant="destructive" className="mt-6 w-full">
              Edit
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
