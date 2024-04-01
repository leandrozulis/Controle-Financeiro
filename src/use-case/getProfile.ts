import { UsersRepository } from '@/repository/users-repository'
import { User } from '@prisma/client'
import { ResourceNotFoundError } from './erros/resource-not-found-error'

interface getProfileUseCaseRequest {
  userId: string
}

interface getProfileUseCaseResponse {
  user: User
}

export class getProfileUseCase {

	constructor(private getProfile: UsersRepository ) {}

	async execute( { userId }: getProfileUseCaseRequest ) : Promise<getProfileUseCaseResponse> {
    
		const user = await this.getProfile.findById(userId)

		if (!user) {
			throw new ResourceNotFoundError()
		}

		return {
			user
		}

	}

}