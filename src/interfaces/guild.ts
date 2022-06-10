import { BaseInterface, getOptions } from "./others";

export interface Guild extends BaseInterface {
	guildId: String,
	lang: String,
	premium: Number,
	reviveMsgs: Number,
	cmdsUsed: Number,
	maxRevs: Number,
}

export interface GuildsInterface {
	get(all: boolean, options: getOptions): Promise<Array<Guild>>;
}