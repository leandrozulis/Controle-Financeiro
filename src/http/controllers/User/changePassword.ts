import { EmailDoesNotExistsError } from '@/use-case/erros/email-does-not-exists-error'
import { MakeChangePasswordUser } from '@/use-case/factories/make-change-password-user'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function changePassword(request: FastifyRequest, reply: FastifyReply) {
  
	const userSchema = z.object({
		email: z.string().email(),
		password: z.string().min(6),
	})

	const { email, password } = userSchema.parse(request.body)

	try {

		const makeUser = MakeChangePasswordUser()

		await makeUser.execute({
			email,
			password,
		})
    
		return reply.status(200).send({ message: 'Password Changed' })

	} catch (err) {
		if (err instanceof EmailDoesNotExistsError) {
			return reply.status(400).send({ message: err.message })
		}

		err
	}

}