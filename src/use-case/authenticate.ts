import { UsersRepository } from '@/repository/users-repository'
import { User } from '@prisma/client'
import { compare } from 'bcryptjs'
import { ResourceNotFoundError } from './erros/resource-not-found-error'

interface authenticateUseCaseRequest {
  email: string
  password: string
}

interface authenticateUseCaseResponse {
  user: User
}

export class authenticateUseCase {

	constructor(private authenticate: UsersRepository ) {}

	async execute( { email, password }: authenticateUseCaseRequest ) : Promise<authenticateUseCaseResponse> {
    
		const user = await this.authenticate.findByEmail(email)

		if (!user) {
			throw new ResourceNotFoundError()
		}

		const doesPasswordMatch = await compare(password, user.password_hash)

		if (!doesPasswordMatch) {
			throw new ResourceNotFoundError()
		}

		return {
			user
		}

	}

}