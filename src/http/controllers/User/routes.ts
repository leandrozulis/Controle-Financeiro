import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authenticate } from './authenticate'
import { changePassword } from './changePassword'
import { profile } from './profile'
import { verifyJWT } from '@/http/middleware/fastifyVerify'

export async function UserRoute(app: FastifyInstance) {

	app.post('/create', register)
	app.post('/session', authenticate)
	
	app.get('/profile', {onRequest: [verifyJWT]}, profile)
	
	app.patch('/password', changePassword)


}