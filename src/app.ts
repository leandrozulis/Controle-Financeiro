import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { UserRoute } from './http/controllers/User/routes'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { InvestimentRoute } from './http/controllers/Investimentos/route'

export const app = fastify()

app.register(fastifyJwt, {
	secret: env.JWT_SECRET,
	cookie: {
		cookieName: 'refreshToken',
		signed: false
	},
	sign: {
		expiresIn: '10m'
	}
})

app.register(fastifyCookie)

app.register(UserRoute)
app.register(InvestimentRoute)

app.setErrorHandler((error, _, reply) => {

	if (error instanceof ZodError) {
		return reply
			.status(400)
			.send( { message: 'Validation Incorret!', issues: error.format() } )
	}

	if ( env.NODE_ENV !== 'prod' ) {
		console.error(error)
	}

	return reply.status(500).send('Internal Server Error!')

})

