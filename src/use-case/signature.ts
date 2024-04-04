import { UsersRepository } from '@/repository/users-repository'
import { User } from '@prisma/client'

interface signatureUseCaseRequest {
  userId: string
  signature: boolean
}

interface signatureUseCaseResponse {
  user: User
}

export class signatureUseCase {

	constructor(private signature: UsersRepository ) {}

	async execute( { userId, signature }: signatureUseCaseRequest ) : Promise<signatureUseCaseResponse> {

		const user = await this.signature.patchSignature(userId, 
			{
				signature
			}
		)

		return {
			user
		}

	}

}