import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import RconRouter from "$app/routes/v1/rcon";
import swaggerDocument from "./swagger.json";

export default Router()
	.use("/rcon", RconRouter)
	.use("/swagger.json", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
