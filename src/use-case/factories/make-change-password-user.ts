import { PrismaUsersRepository } from '@/repository/prisma/prisma-users-repository'
import { changePasswordUseCase } from '../change-password'

export function MakeChangePasswordUser() {

	const prisma = new PrismaUsersRepository()
	const user = new changePasswordUseCase(prisma)

	return user

}