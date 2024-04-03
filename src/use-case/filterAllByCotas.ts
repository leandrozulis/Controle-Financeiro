import { InvestimentRepository } from '@/repository/investiment-repository'

interface filterByAllCotasUseCaseRequest {
  userId: string
}

export class filterByAllCotasUseCase {

	constructor(private filterByAllCotas: InvestimentRepository) {}

	async execute( { userId }: filterByAllCotasUseCaseRequest ) {
    
		const cotas = await this.filterByAllCotas.filterByCotas(userId)

		return {
			cotas
		}

	}

}