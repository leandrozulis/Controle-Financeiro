import { Prisma } from '@prisma/client'
import { InvestimentRepository } from '../investiment-repository'
import { prisma } from '@/lib/prisma'

export class PrismaInvestimentRepository implements InvestimentRepository {

	async create(data: Prisma.InvestimentUncheckedCreateInput) {
		
		const investiment = await prisma.investiment.create({
			data
		})

		return investiment

	}
  
}