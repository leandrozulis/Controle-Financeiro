import { MakeFilterDateInvestiment } from '@/use-case/factories/make-filter-by-date'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function filterByDate(request: FastifyRequest, reply: FastifyReply) {

	const filterSchema = z.object({
		dateIni: z.string(),
		dateFim: z.string()
	})

	const { dateIni, dateFim } = filterSchema.parse(request.query)
  
	try {
		const makeInvestiment = MakeFilterDateInvestiment()
  
		const cotas = await makeInvestiment.execute({
			userId: request.user.sub,
			dateIni,
			dateFim
		})
      
		return reply
			.status(200)
			.send(cotas)
      
	} catch (err) {
		return reply.status(400).send({ message: err })
	}

}