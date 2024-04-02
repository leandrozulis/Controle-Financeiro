import { InvestimentRepository } from '@/repository/investiment-repository'
import { Investiment } from '@prisma/client'

interface investimentoUseCaseRequest {
  sigla: string
  amount: string
  price: number
  user_id: string
}

interface investimentoUseCaseResponse {
  investiment: Investiment
}

export class investimentoUseCase {

	constructor(private investimento: InvestimentRepository) {}

	async execute( { sigla, amount, price, user_id }: investimentoUseCaseRequest ) : Promise<investimentoUseCaseResponse> {
    
		const investiment = await this.investimento.create({
			sigla,
			amount,
			price,
			user_id
		})

		return {
			investiment
		}

	}

}