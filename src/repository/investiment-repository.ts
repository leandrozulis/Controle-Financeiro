import { Investiment, Prisma } from '@prisma/client'

export interface InvestimentRepository {
  create(data: Prisma.InvestimentUncheckedCreateInput): Promise<Investiment>
  findCota(query: string, id: string): Promise<Investiment[]>
  filterByCotas(id: string): Promise<Investiment[]>
  filterByDate(id: string, dateIni: string, dateFim: string): Promise<Investiment[]>
  deleteCota(id: string, userId: string): Promise<Investiment>
}