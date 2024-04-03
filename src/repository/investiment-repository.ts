import { Investiment, Prisma } from '@prisma/client'

export interface InvestimentRepository {
  create(data: Prisma.InvestimentUncheckedCreateInput): Promise<Investiment>
  findCota(query: string): Promise<Investiment[]>
}