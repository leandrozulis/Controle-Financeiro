import { findManyCotasUseCase } from '../findManyCotas'
import { PrismaInvestimentRepository } from '@/repository/prisma/prisma-investiment-repository'

export function MakeFindManyCotasInvestiment() {

	const prisma = new PrismaInvestimentRepository()
	const investiment = new findManyCotasUseCase(prisma)

	return investiment

}