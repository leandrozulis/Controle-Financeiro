import { Prisma } from '@prisma/client'
import { InvestimentRepository } from '../investiment-repository'
import { prisma } from '@/lib/prisma'

export class PrismaInvestimentRepository implements InvestimentRepository {
	async deleteCota(id: string, userId: string) {
		
		const investimento = await prisma.investiment.delete({
			where: {
				id,
				user_id: userId
			}
		})

		return investimento

	}
	
	async filterByDate(id: string, dateIni: string, dateFim: string) {
		
		const investimento = await prisma.investiment.findMany({
			where: {
				user_id: id,
				created_at: {
					gte: new Date(dateIni + 'T00:00:00'),
					lte: new Date(dateFim + 'T23:59:59')
				}
			}
		})

		return investimento

	}

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