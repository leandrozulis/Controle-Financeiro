import { PrismaInvestimentRepository } from '@/repository/prisma/prisma-investiment-repository'
import { deleteInvestimentUseCase } from '../deleteInvestiment'

export function MakeDeleteInvestiment() {

	const prisma = new PrismaInvestimentRepository()
	const investiment = new deleteInvestimentUseCase(prisma)

	return investiment

}