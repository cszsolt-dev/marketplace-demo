import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import AppHeader from "@/features/AppHeader";
import "@/style/global.css";

const font = Roboto({
	variable: "--font-main",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tcg marketplace",
	description: "",
};

export function generateStaticParams() {
	return [{ language: "en" }];
}

export default async function RootLayout(props: LayoutProps<"/[language]">) {
	return (
		<html className={`${font.variable} antialiased`}>
			<body className="text-sm">
				<AppHeader />
				{props.children}
			</body>
		</html>
	);
}
