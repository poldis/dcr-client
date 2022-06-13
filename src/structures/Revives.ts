import { getOptions } from '../interfaces/others';
import { Revive, RevivesClass } from '../interfaces/revive';
import DcrCache from 'dcr-cache';

export default class Revives implements RevivesClass {
	constructor(private cache: DcrCache) {
		this.cache = cache;
	}
	public async get(id: String | Number, options: getOptions): Promise<Revive> {
		const reqOpts = {
			force: options?.force || false,
			update: options?.update || true,
		}
		// if (options?.all) return await this.cache.getAll('revive', "channelId", reqOpts);
		if (id) return await this.cache.get('revive', id, reqOpts);
		throw new Error("Revives.get() was run without an id provided.");
	}
	public async del(id: String | Number, options: getOptions): Promise<Boolean> {
		if (id) return await this.cache.del('revive', id, options);
		throw new Error("Revives.del() was run without an id provided.");
	}
}