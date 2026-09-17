export default async function EmptyPage() {
	const response = await fetch("http://localhost:3001/products/id");
	const { brand, productType, productName } = await response.json();

	return (
		<div className="h-full">
			<div className="p-4">{`${brand} / ${productType} / ${productName}`}</div>
		</div>
	);
}
