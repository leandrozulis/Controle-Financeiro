import { AlreadyExistsError } from '@/use-case/erros/already-exists-error'
import { MakeFindManyCotasInvestiment } from '@/use-case/factories/make-findManyCotas'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findCota(request: FastifyRequest, reply: FastifyReply) {
  
	const investimentSchema = z.object({
		sigla: z.string()
	})

	const { sigla } = investimentSchema.parse(request.query)

	try {

		const makeInvestiment = MakeFindManyCotasInvestiment()

		const cotas = await makeInvestiment.execute({
			sigla,
			userId: request.user.sub
		})
    
		return reply
			.status(200)
			.send(cotas)

	} catch (err) {
		if (err instanceof AlreadyExistsError) {
			return reply.status(400).send({ message: err.message })
		}

		err
	}

}