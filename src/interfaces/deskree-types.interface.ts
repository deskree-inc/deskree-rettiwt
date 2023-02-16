export type TweetsDataType = {
	uid: string
	message: string
	factMessage?: string
	author?: string
	updatedAt?: string
	createdAt?: string
}

export type UsersDataType = {
	uid: string
	email: string
	roles: string[]
	username?: string
	createdAt?: string
	avatar?: string
	updatedAt?: string
}

