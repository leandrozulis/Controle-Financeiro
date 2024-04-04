import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authenticate } from './authenticate'
import { changePassword } from './changePassword'
import { profile } from './profile'
import { verifyJWT } from '@/http/middleware/fastifyVerify'
import { refreshToken } from './refreshToken'
import { signature } from './signature'

export async function UserRoute(app: FastifyInstance) {

	app.post('/create', register)
	app.post('/session', authenticate)

	app.patch('/token/refresh', refreshToken)
	
	app.get('/profile', {onRequest: [verifyJWT]}, profile)
	
	app.patch('/password', changePassword)
	app.patch('/signature', {onRequest: [verifyJWT]}, signature)

}