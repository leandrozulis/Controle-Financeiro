import { MakeFilterAllByCotasInvestiment } from '@/use-case/factories/make-filter-all-cotas'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function filterByCotas(request: FastifyRequest, reply: FastifyReply) {
  
	const makeInvestiment = MakeFilterAllByCotasInvestiment()

	const cotas = await makeInvestiment.execute({
		userId: request.user.sub
	})
    
	return reply
		.status(200)
		.send(cotas)

}