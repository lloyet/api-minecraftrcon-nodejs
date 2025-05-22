import { Rcon } from "rcon-client";

import { RCON_HOST, RCON_PASSWORD, RCON_PORT, RCON_TIMEOUT } from "$app/env";
import logger from "$app/utils/logger";

export let rconClient: Rcon;

process.on("exit", closeRcon);
process.on("SIGHUP", () => process.exit(128 + 1));
process.on("SIGINT", () => process.exit(128 + 2));
process.on("SIGTERM", () => process.exit(128 + 15));

async function closeRcon() {
	if (!rconClient || !rconClient.authenticated) return;

	await rconClient.end();
}

async function rconConnect() {
	logger.info(`[RCON] connecting to ${RCON_HOST}:${RCON_PORT}...`);

	try {
		rconClient = await Rcon.connect({
			host: RCON_HOST,
			port: RCON_PORT,
			password: RCON_PASSWORD
		});
		rconClient.on("end", () => rconConnect());
		logger.info(`[RCON] connected to ${RCON_HOST}:${RCON_PORT}`);
	} catch (err) {
		logger.error(err);

		logger.info(`[RCON] attempt to reconnect in ${RCON_TIMEOUT / 1000} seconds...`);

		setTimeout(() => {
			if (!!rconClient && rconClient.authenticated) rconClient.end();

			rconConnect();
		}, RCON_TIMEOUT);
	}
}

rconConnect();
