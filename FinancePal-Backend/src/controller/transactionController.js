import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const getTransaction = async (req, res) => {
  try {
    const transactions = await prisma.Transaction.findMany()
    res.json(transactions)
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar transações"})
  }
}