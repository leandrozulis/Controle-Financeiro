import { ResourceNotFoundError } from '@/use-case/erros/resource-not-found-error'
import { MakeAuthenticateUser } from '@/use-case/factories/make-authenticate-user'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  
	const userSchema = z.object({
		email: z.string().email(),
		password: z.string().min(6),
	})

	const { email, password } = userSchema.parse(request.body)

	try {

		const makeUser = MakeAuthenticateUser()

		const { user } = await makeUser.execute({
			email,
			password,
		})

		const token = await reply.jwtSign({}, {
			sign: {
				sub: user.id
			}
		})

		const refreshToken = await reply.jwtSign({}, {
			sign: {
				sub: user.id,
				expiresIn: '7d'
			}
		})
    
		return reply
			.setCookie('refreshToken', refreshToken, {
				path: '/',
				secure: true,
				sameSite: true,
				httpOnly: true
			})
			.status(200)
			.send({ message: 'Authenticate User', 'Token': token })

	} catch (err) {
		if (err instanceof ResourceNotFoundError) {
			return reply.status(400).send({ message: err.message })
		}

		err
	}

}