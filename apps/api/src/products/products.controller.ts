import { Controller, Get, Param } from "@nestjs/common";
import { ProductsService } from "./products.service.js";

type GetProductDetailsParams = { productId: string };

@Controller("products")
export class ProductsController {
	constructor(private readonly appService: ProductsService) {}

	@Get(":productId")
	getProductDetails(@Param() params: GetProductDetailsParams): unknown {
		const { productId } = params;
		return this.appService.getProductDetails(productId);
	}
}
