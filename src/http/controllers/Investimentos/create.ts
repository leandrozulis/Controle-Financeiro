import { AlreadyExistsError } from '@/use-case/erros/already-exists-error'
import { MakeInvestiment } from '@/use-case/factories/make-investiment'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  
	const investimentSchema = z.object({
		sigla: z.string(),
		amount: z.string(),
		price: z.number(),
	})

	const { sigla, amount, price } = investimentSchema.parse(request.body)

	try {

		const makeInvestiment = MakeInvestiment()

		await makeInvestiment.execute({
			sigla,
			amount,
			price,
			user_id: request.user.sub
		})
    
		return reply.status(201).send({ message: 'Create Investiment' })

	} catch (err) {
		if (err instanceof AlreadyExistsError) {
			return reply.status(400).send({ message: err.message })
		}

		err
	}

}