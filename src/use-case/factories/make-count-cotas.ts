import { countCotasUseCase } from '../countCotas'
import { PrismaInvestimentRepository } from '@/repository/prisma/prisma-investiment-repository'

export function MakeCountCotasInvestiment() {

	const prisma = new PrismaInvestimentRepository()
	const investiment = new countCotasUseCase(prisma)

	return investiment

}