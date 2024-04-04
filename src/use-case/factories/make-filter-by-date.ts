import { PrismaInvestimentRepository } from '@/repository/prisma/prisma-investiment-repository'
import { filterDateUseCase } from '../filterByDate'

export function MakeFilterDateInvestiment() {

	const prisma = new PrismaInvestimentRepository()
	const investiment = new filterDateUseCase(prisma)

	return investiment

}