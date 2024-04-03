import { Prisma } from '@prisma/client'
import { InvestimentRepository } from '../investiment-repository'
import { prisma } from '@/lib/prisma'

export class PrismaInvestimentRepository implements InvestimentRepository {

	async filterByCotas(id: string) {
		
		const investimento = await prisma.investiment.findMany({
			where: {
				user_id: id
			}
		})

		return investimento

	}

	async findCota(query: string, id: string) {
		
		const investimento = await prisma.investiment.findMany({
			where: {
				sigla: query,
				user_id: id
			}
		})

		return investimento

	}

	async create(data: Prisma.InvestimentUncheckedCreateInput) {
		
		const investiment = await prisma.investiment.create({
			data
		})

		return investiment

	}
  
}