import { MakeCountCotasInvestiment } from '@/use-case/factories/make-count-cotas'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function countCotas(request: FastifyRequest, reply: FastifyReply) {
  
	const makeInvestiment = MakeCountCotasInvestiment()

	const cotas = await makeInvestiment.execute({
		userId: request.user.sub
	})
    
	return reply
		.status(200)
		.send(cotas)

}