export type TweetsDataType = {
	uid: string
	message: string
	factMessage?: string
	author: AuthorDataType
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

export type AuthorDataType = {
	uid: string;
	username: string;
	email: string;
	avatar: string;
	roles: [];
	createdAt: string;
	updatedAt: string;
}