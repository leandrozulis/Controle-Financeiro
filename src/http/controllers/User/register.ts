import { AlreadyExistsError } from '@/use-case/erros/already-exists-error'
import { MakeRegisterUser } from '@/use-case/factories/make-register-user'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  
	const userSchema = z.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string().min(6),
		signature: z.boolean().optional()
	})

	const { name, email, password, signature } = userSchema.parse(request.body)

	try {

		const makeUser = MakeRegisterUser()

		await makeUser.execute({
			name,
			email,
			password,
			signature
		})
    
		return reply.status(201).send({ message: 'Registered User' })

	} catch (err) {
		if (err instanceof AlreadyExistsError) {
			return reply.status(400).send({ message: err.message })
		}

		err
	}

}