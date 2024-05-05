import Image from "next/image";
import { Card, CardContent } from "../_components/ui/card";
import { Button } from "../_components/ui/button";

const Perfil = () => {
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
              <p className="text-sm font-medium leading-none">
                Pedro Augusto Lopes Gomes
              </p>
            </div>
          </div>
          <div className="space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-none">
                22<span> anos</span>
              </p>
            </div>
          </div>
          <div className="space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-none">
                Rua joão pessoa
              </p>
            </div>
          </div>
          <div className="space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita rerum omnis perferendis ducimus aliquid accusamus quas
                laborum repellendus! Sequi nihil earum fuga voluptas, quae
                corrupti? Facere libero dolore repudiandae voluptas. Rerum,
                minus? Neque quibusdam voluptate illo alias ipsum fugit quasi
                molestiae optio, asperiores quia assumenda dolorum impedit
                officia incidunt doloribus nisi sed nulla dicta. Repudiandae
                doloremque ab repellat consectetur nam. Ad facilis minus atque
                ipsam pariatur veritatis expedita deserunt voluptatum doloremque
                accusamus iste illum quos sequi impedit voluptates ipsum ut at
                architecto, perspiciatis excepturi dolorum laudantium. Harum
                molestiae odio laborum?
              </p>
            </div>
          </div>
        </div>
        <Button variant="destructive" className="mt-6 w-full">
            Editar
        </Button>
      </CardContent>
    </Card>
  );
};

export default Perfil;
