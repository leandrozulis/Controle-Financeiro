import { UsersRepository } from '@/repository/users-repository'
import { User } from '@prisma/client'
import { AlreadyExistsError } from './erros/already-exists-error'
import { hash } from 'bcryptjs'

interface registerUseCaseRequest {
  name: string
  email: string
  password: string
  signature?: boolean
}

interface registerUseCaseResponse {
  user: User
}

export class registerUseCase {

	constructor(private register: UsersRepository ) {}

	async execute( { name, email, password, signature }: registerUseCaseRequest ) : Promise<registerUseCaseResponse> {
    
		const validateEmail = await this.register.findByEmail(email)

		if (validateEmail) {
			throw new AlreadyExistsError()
		}

		const password_hash = await hash(password, 6)

		const user = await this.register.create({
			name,
			email,
			password_hash,
			signature
		})

		return {
			user
		}

	}

}