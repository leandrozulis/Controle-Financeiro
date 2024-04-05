import { MakeDeleteInvestiment } from '@/use-case/factories/make-delete-investiment'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deleteCota(request: FastifyRequest, reply: FastifyReply) {

	const investimentSchema = z.object({
		id: z.string().uuid()
	})

	const { id } = investimentSchema.parse(request.params)

	try {
		const makeInvestiment = MakeDeleteInvestiment()
  
		await makeInvestiment.execute({
			id,
			userId: request.user.sub
		})
      
		return reply.status(200).send({meessage: 'Register deleted'})
	} catch (err) {
		return reply.status(400).send({ message: err })
	}
  

}