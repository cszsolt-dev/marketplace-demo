import { join } from "node:path";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

async function main() {
	try {
		process.loadEnvFile(join(process.cwd(), "..", "..", ".env"));
	} catch (e) {
		console.log("Cannot open .env");
	}

	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.APPLICATION_API_PORT ?? 3002);
}

await main();
