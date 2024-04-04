import { MakeSignatureUser } from '@/use-case/factories/make-signature-user'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function signature(request: FastifyRequest, reply: FastifyReply) {

	try {

		const makeUser = MakeSignatureUser()

		await makeUser.execute({
			userId: request.user.sub,
			signature: true
		})
    
		return reply.status(200).send({ message: 'Signature Actived'})

	} catch (err) {
		
		return reply.status(400).send({ message: err })
	
	}

}