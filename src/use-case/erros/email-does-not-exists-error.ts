export class EmailDoesNotExistsError extends Error {
	constructor() {
		super('Email Does Not Exists!')
	}
}