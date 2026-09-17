import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import request from "supertest";
import type { App } from "supertest/types.d.ts";
import { AppModule } from "./../src/app.module.js";

describe("AppController (e2e)", () => {
	let app: INestApplication<App>;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it("/ (GET)", () => {
		return request(app.getHttpServer()).get("/products/productId").expect(200).expect({
			brand: "Some Brand",
			productType: "Sealed",
			productName: "Premium TCG starter deck",
			productId: "productId",
		});
	});

	afterEach(async () => {
		await app.close();
	});
});
