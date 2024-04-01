import { Prisma } from '@prisma/client'
import { UsersRepository } from '../users-repository'
import { prisma } from '@/lib/prisma'

export class PrismaUsersRepository implements UsersRepository {

	async findById(id: string) {
		
		const user = await prisma.user.findFirst({
			where: {
				id
			}
		})

		if (!user) {
			return null
		}

		return user

	}

	async patchPassword(email: string, password_hash: Prisma.UserUpdateInput) {
	
		const user = await prisma.user.update({
			where: {
				email
			},
			data: password_hash
		})

		return user

	}

	async create(data: Prisma.UserCreateInput) {
		const user = await prisma.user.create({
			data
		})

		return user
	}
  
	async findByEmail(email: string) {
    
		const user = await prisma.user.findUnique({
			where: {
				email
			}
		})

		if (!user) {
			return null
		}

		return user

	}
  
}