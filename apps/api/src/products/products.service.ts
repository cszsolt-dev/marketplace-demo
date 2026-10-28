import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
	getProductDetails(productId: string): unknown {
		return {
			brand: "Some Brand",
			productType: "Sealed",
			productName: "Premium TCG starter deck",
			productId,
		};
	}
}
