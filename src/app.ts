import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { UserRoute } from './http/controllers/User/routes'

export const app = fastify()

app.register(UserRoute)

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
