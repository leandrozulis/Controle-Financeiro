import { PrismaUsersRepository } from '@/repository/prisma/prisma-users-repository'
import { signatureUseCase } from '../signature'

export function MakeSignatureUser() {

	const prisma = new PrismaUsersRepository()
	const user = new signatureUseCase(prisma)

	return user

}