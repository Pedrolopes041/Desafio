import Image from "next/image";
import { Card, CardContent } from "../_components/ui/card";
import { Button } from "../_components/ui/button";
import Link from "next/link";

import { UserProps } from "../api/user/route";
import { Badge } from "./ui/badge";

const CardItem = async ({
  age,
  biography,
  name,
  street,
  neighborhood,
  state,
}: UserProps) => {
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
            <div>
              <p className="text-2xl font-bold">{name}</p>
            </div>
            <div>
              <p className="text-sm font-normal">
                {age}
                <span> anos</span>
              </p>
            </div>
            <div>
              <p className="text-sm font-normal text-justify ">{biography}</p>
            </div>
            <div className="flex gap-3">
              <Image src="/map-pin.svg" alt="icon" width={20} height={20} />
              <p className="text-sm font-normal ">{state}</p>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row">
              <div>
                <Badge
                  className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap"
                  variant="secondary"
                >
                  {neighborhood}
                </Badge>
              </div>
              <div>
                <Badge
                  className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap"
                  variant="secondary"
                >
                  {street}
                </Badge>
              </div>
            </div>

            <Link href="/profile" className="w-full">
              <Button variant="default" className="mt-6 w-full">
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
