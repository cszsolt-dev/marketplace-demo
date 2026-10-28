import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import AppHeader from "@/features/AppHeader";
import { allowedLocales } from "@/i18n/utils";
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
	return allowedLocales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: LayoutProps<"/[language]">) {
export default async function RootLayout(props: LayoutProps<"/[locale]">) {
	return (
		<html className={`${font.variable} antialiased`}>
			<body className="text-sm">
				<NextIntlClientProvider>
					<AppHeader />
					{props.children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
