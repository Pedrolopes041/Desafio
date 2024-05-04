const { PrismaClient } =  require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Inserir uma pessoa na tabela Pessoa
    await prisma.pessoa.create({
      data: {
        imagemDePerfil: 'caminho/para/imagem1.jpg',
        nome: 'João',
        idade: 30,
        rua: 'Rua A',
        bairro: 'Bairro X',
        estado: 'Estado 1',
        biografia: 'Descrição da biografia do João'
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
