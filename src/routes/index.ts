import { Router } from "express";

import v1Router from "$app/routes/v1";
import * as errorController from "$app/controllers/errorController";
import healthController from "$app/controllers/healthController";

export default Router()
	.get("/", healthController)
	.use("/v1", v1Router)
	.use(errorController.trigger)
	.use(errorController.handler);
