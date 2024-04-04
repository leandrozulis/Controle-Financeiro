import { InvestimentRepository } from '@/repository/investiment-repository'

interface filterDateUseCaseRequest {
  userId: string,
  dateIni: string,
  dateFim: string
}

export class filterDateUseCase {

	constructor(private filterDate: InvestimentRepository) {}

	async execute( { userId, dateIni, dateFim }: filterDateUseCaseRequest ) {
    
		const cotas = await this.filterDate.filterByDate(userId, dateIni, dateFim)

		return {
			cotas
		}

	}

}