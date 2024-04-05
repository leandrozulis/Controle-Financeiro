import { InvestimentRepository } from '@/repository/investiment-repository'

interface deleteInvestimentUseCaseRequest {
  id: string
	userId: string
}

export class deleteInvestimentUseCase {

	constructor(private deleteInvestiment: InvestimentRepository) {}

	async execute( { id, userId }: deleteInvestimentUseCaseRequest ) {
    
		return await this.deleteInvestiment.deleteCota(id, userId)

	}

}