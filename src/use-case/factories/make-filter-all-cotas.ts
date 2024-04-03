import { PrismaInvestimentRepository } from '@/repository/prisma/prisma-investiment-repository'
import { filterByAllCotasUseCase } from '../filterAllByCotas'

export function MakeFilterAllByCotasInvestiment() {

	const prisma = new PrismaInvestimentRepository()
	const investiment = new filterByAllCotasUseCase(prisma)

	return investiment

}