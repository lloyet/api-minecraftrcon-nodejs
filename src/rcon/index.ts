import { Rcon } from "rcon-client";

import { RCON_HOST, RCON_PASSWORD, RCON_PORT } from "$app/env";
import logger from "$app/utils/logger";

export let rconClient: Rcon;

Rcon.connect({
	host: RCON_HOST,
	port: RCON_PORT,
	password: RCON_PASSWORD
})
	.then((client) => {
		rconClient = client;

		logger.info(`[RCON] connected to ${RCON_HOST}:${RCON_PORT}`);
	})
	.catch((err) => {
		logger.error(err);
	});
