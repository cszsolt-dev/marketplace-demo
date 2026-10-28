import { Test, TestingModule } from "@nestjs/testing";
import { ProductsController } from "./products.controller.js";
import { ProductsService } from "./products.service.js";

describe("ProductsController", () => {
	let appController: ProductsController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [ProductsController],
			providers: [ProductsService],
		}).compile();

		appController = app.get<ProductsController>(ProductsController);
	});

	describe("/products", () => {
		it("should return product information", () => {
			expect(
				appController.getProductDetails({
					productId: "1234",
				}),
			).toStrictEqual({
				brand: "Some Brand",
				productType: "Sealed",
				productName: "Premium TCG starter deck",
				productId: "1234",
			});
		});
	});
});
