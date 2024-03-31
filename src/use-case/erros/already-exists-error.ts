export class AlreadyExistsError extends Error {
	constructor() {
		super('Error: Email Already Exists!')
	}
}