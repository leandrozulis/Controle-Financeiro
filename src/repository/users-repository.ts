import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  patchPassword(email: string, password: Prisma.UserUpdateInput): Promise<User>
  patchSignature(userId: string, signature: Prisma.UserUpdateInput): Promise<User>
}