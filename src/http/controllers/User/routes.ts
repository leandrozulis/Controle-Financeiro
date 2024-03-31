import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authenticate } from './authenticate'

export async function UserRoute(app: FastifyInstance) {

	app.post('/create', register)
	app.post('/session', authenticate)

}