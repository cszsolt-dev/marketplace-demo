import * as rootParams from "next/root-params";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { allowedLocales } from "@/i18n/utils";

export default getRequestConfig(async () => {
	const paramValue = await rootParams.locale();

	let locale;
	if (hasLocale(allowedLocales, paramValue)) {
		locale = paramValue;
	} else {
		// Runtime validation for unknown locales
		notFound();
	}

	return {
		locale,
		messages: (await import(`./messages/${locale}.json`)).default,
	};
});
