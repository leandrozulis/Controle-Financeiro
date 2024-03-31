import { UsersRepository } from '@/repository/users-repository'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { EmailDoesNotExistsError } from './erros/email-does-not-exists-error'

interface changePasswordUseCaseRequest {
  email: string
  password: string
}

interface changePasswordUseCaseResponse {
  user: User
}

export class changePasswordUseCase {

	constructor(private password: UsersRepository ) {}

	async execute( { email, password }: changePasswordUseCaseRequest ) : Promise<changePasswordUseCaseResponse> {
    
		const user = await this.password.findByEmail(email)

		if (!user) {
			throw new EmailDoesNotExistsError()
		}

		const password_hash = await hash(password, 6)

		await this.password.patchPassword(user.email,
			{
				password_hash
			}
		)

		return {
			user
		}

	}

}