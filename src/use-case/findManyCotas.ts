import { InvestimentRepository } from '@/repository/investiment-repository'
import { Investiment } from '@prisma/client'

interface findManyCotasUseCaseRequest {
  sigla: string
	userId: string
}

interface findManyCotasUseCaseResponse {
  investiment: Investiment[]
  total: Record<string, string>
}

export class findManyCotasUseCase {

	constructor(private findManyCotas: InvestimentRepository) {}

	async execute( { sigla, userId }: findManyCotasUseCaseRequest ) : Promise<findManyCotasUseCaseResponse> {
    
		const investiment = await this.findManyCotas.findCota(sigla, userId)

		const totalAmount = investiment.reduce((total, invest) => total + parseInt(invest.amount), 0)

		return {
			investiment,
			total: {
				amount: totalAmount.toString()
			}
		}

	}

}