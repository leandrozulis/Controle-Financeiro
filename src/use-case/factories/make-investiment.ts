import { investimentoUseCase } from '../investimentos'
import { PrismaInvestimentRepository } from '@/repository/prisma/prisma-investiment-repository'

export function MakeInvestiment() {

	const prisma = new PrismaInvestimentRepository()
	const investiment = new investimentoUseCase(prisma)

	return investiment

}