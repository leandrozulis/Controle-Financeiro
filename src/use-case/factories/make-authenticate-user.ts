import { PrismaUsersRepository } from '@/repository/prisma/prisma-users-repository'
import { authenticateUseCase } from '../authenticate'

export function MakeAuthenticateUser() {

	const prisma = new PrismaUsersRepository()
	const user = new authenticateUseCase(prisma)

	return user

}