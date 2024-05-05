const { PrismaClient } =  require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Inserir uma pessoa na tabela Pessoa
    await prisma.pessoa.create({
      data: {
        profileImage: 'caminho/para/imagem1.jpg',
        name: 'João',
        age: 30,
        street: 'Rua A',
        biography: 'Descrição da biografia do João'
      }
    });

    console.log('Pessoa inserida com sucesso.');

  } catch (error) {
    console.error('Erro ao inserir pessoa:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
