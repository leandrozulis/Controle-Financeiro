import { FastifyInstance } from 'fastify'
import { register } from './register'

export async function UserRoute(app: FastifyInstance) {

	app.post('/create', register)

}