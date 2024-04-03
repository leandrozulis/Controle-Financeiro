import { InvestimentRepository } from '@/repository/investiment-repository'

interface countCotasUseCaseRequest {
  userId: string
}

export class countCotasUseCase {

	constructor(private countCotas: InvestimentRepository) {}

	async execute( { userId }: countCotasUseCaseRequest ) {
    
		const findCotas = await this.countCotas.filterByCotas(userId)

		const totalInvestedPerCota  = findCotas.map(cota => {
			const totalPrice = parseFloat(cota.price.toString()) * parseInt(cota.amount)
			return totalPrice
		})

		const investiment = totalInvestedPerCota.reduce((total, valor) => total + valor, 0)

		return {
			total: investiment
		}

	}

}