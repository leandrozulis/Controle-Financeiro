import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authenticate } from './authenticate'
import { changePassword } from './changePassword'

export async function UserRoute(app: FastifyInstance) {

	app.post('/create', register)
	app.post('/session', authenticate)
	
	app.patch('/password', changePassword)

}