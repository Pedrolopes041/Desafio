import { db } from "../_lib/prisma";
import CardItem from "../_components/card";

const Perfil = async () => {

  /*Informação banco de dados puxando */
  const pessoas = await db.pessoa.findMany({});

  return (
    <>
      {pessoas.map((pessoa) => (
        <CardItem key={pessoa.id} PessoaId={pessoa} />
      ))}
    </>
  );
};

export default Perfil;
