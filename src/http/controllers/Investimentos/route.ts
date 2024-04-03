import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/http/middleware/fastifyVerify'
import { create } from './create'
import { findCota } from './findCota'

export async function InvestimentRoute(app: FastifyInstance) {

	app.addHook('onRequest', verifyJWT)

	app.post('/create/investimento', create)

	app.get('/find', findCota)

}