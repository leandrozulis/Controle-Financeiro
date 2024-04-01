// import { MakeProfileUser } from '@/use-case/factories/make-profile-user'
import { MakeProfileUser } from '@/use-case/factories/make-profile-user'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {

	const makeUser = MakeProfileUser()

	const { user } = await makeUser.execute({
		userId: request.user.sub
	})
    
	return reply.status(200).send(
		{
			user: { 
				...user, 
				password_hash: undefined 
			}
		})

}