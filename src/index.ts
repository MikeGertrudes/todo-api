import { PrismaClient } from '@prisma/client'
import { User, Todo } from './types'

const prisma = new PrismaClient()

async function main() {
  const todos = await prisma.user
    .findUnique({
      where: {
        id: 1
      }
    })
    .todo()

  return todos
}

main()
  .then((todos: Todo[]) => {
    console.log(todos)

    process.stdout.write(`Here we are `)
  })
  .catch(() => {
    process.stdout.write(`There was an error `)
  })
  .finally(async () => {
    process.stdout.write(`annnnd we're done.\n`)

    await prisma.$disconnect()
  })
