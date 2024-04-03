import { Prisma } from '@prisma/client'
import { InvestimentRepository } from '../investiment-repository'
import { prisma } from '@/lib/prisma'

export class PrismaInvestimentRepository implements InvestimentRepository {

	async findCota(query: string) {
		
		const investimento = await prisma.investiment.findMany({
			where: {
				sigla: query
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