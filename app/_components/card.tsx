import Image from "next/image";
import { Card, CardContent } from "../_components/ui/card";
import { Button } from "../_components/ui/button";
import Link from "next/link";

import { UserProps } from "../api/user/route";

const CardItem = async ({ age, biography, name, street }: UserProps) => {
  return (
    <div className="flex justify-center items-center p-6">
      <Card className="w-full p-4 md:w-[550px]">
        <CardContent className="mt-6 flex flex-col justify-center items-center">
          <div className="rounded-full overflow-hidden w-32 h-32 mb-6">
            <Image
              src="/imageprofile.jpg"
              alt="fsw-Barber"
              width={130}
              height={130}
              className="rounded-full"
            />
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <div className="space-x-4 rounded-md border p-4">
              <div>
                <p className="text-sm font-medium leading-none">
                  {name}
                </p>
              </div>
            </div>
            <div className="space-x-4 rounded-md border p-4">
              <div>
                <p className="text-sm font-medium leading-none">
                  {age}
                  <span> anos</span>
                </p>
              </div>
            </div>
            <div className="space-x-4 rounded-md border p-4">
              <div>
                <p className="text-sm font-medium leading-none">
                  {street}
                </p>
              </div>
            </div>
            <div className="space-x-4 rounded-md border p-4">
              <div>
                <p className="text-sm font-medium leading-normal">
                  {biography}
                </p>
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
    </div>
  );
};

export default CardItem;
