import { InvestimentRepository } from '@/repository/investiment-repository'
import { Investiment } from '@prisma/client'

interface findManyCotasUseCaseRequest {
  sigla: string
}

interface findManyCotasUseCaseResponse {
  investiment: Investiment[]
  total: Record<string, string>
}

export class findManyCotasUseCase {

	constructor(private findManyCotas: InvestimentRepository) {}

	async execute( { sigla }: findManyCotasUseCaseRequest ) : Promise<findManyCotasUseCaseResponse> {
    
		const investiment = await this.findManyCotas.findCota(sigla)

		const totalAmount = investiment.reduce((total, invest) => total + parseInt(invest.amount), 0)

		return {
			investiment,
			total: {
				amount: totalAmount.toString()
			}
		}

	}

}