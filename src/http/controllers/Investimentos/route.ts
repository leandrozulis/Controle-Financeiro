import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/http/middleware/fastifyVerify'
import { create } from './create'
import { findCota } from './findCota'
import { countCotas } from './countCotas'
import { filterByCotas } from './filterAllByCotas'

export async function InvestimentRoute(app: FastifyInstance) {

	app.addHook('onRequest', verifyJWT)

	app.post('/create/investimento', create)

	app.get('/find', findCota)
	app.get('/count', countCotas)
	app.get('/cotas', filterByCotas)

}