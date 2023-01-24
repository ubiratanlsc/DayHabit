import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'
const port = 3333
const app = Fastify()

app.register(cors)

const prisma = new PrismaClient()
app.get('/', async () => {
 const habits = await prisma.habit.findMany({
  
  // where: {
  //   title:{
  //     startsWith: 'Ler'
  //   }
  // }
  
 })
 return habits
})
app.listen({
  port: port,
}).then(() => {
  console.log(`server running on port ${port}`)
})
