import { PrismaUsersRepository } from '@/repository/prisma/prisma-users-repository'
import { getProfileUseCase } from '../getProfile'

export function MakeProfileUser() {

	const prisma = new PrismaUsersRepository()
	const user = new getProfileUseCase(prisma)

	return user

}