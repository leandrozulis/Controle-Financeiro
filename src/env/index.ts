import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
	PORT: z.coerce.number().default(9393),
	NODE_ENV: z.enum(['dev', 'test', 'prod']).default('dev')
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
	console.error('Variável incorreta!', _env.error.format())
	throw new Error('Variável incorreta!')
}

export const env = _env.data