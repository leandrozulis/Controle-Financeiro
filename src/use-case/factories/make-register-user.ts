import { PrismaUsersRepository } from '@/repository/prisma/prisma-users-repository'
import { registerUseCase } from '../register'

export function MakeRegisterUser() {

	const prisma = new PrismaUsersRepository()
	const user = new registerUseCase(prisma)

	return user

}