export class ResourceNotFoundError extends Error {
	constructor() {
		super('Error: Resource Not Found!')
	}
}