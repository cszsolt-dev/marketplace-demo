import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Button, Input } from "@marketplace/ui";

export default async function AppHeader() {
	const t = await getTranslations("app.appHeader");
	return (
		<header className="bg-midnight-900 m-3 grid h-12 grid-cols-[1fr_800px_1fr] items-center gap-4 rounded-lg px-4 py-2">
			<nav>
				<ul>
					<li>
						<Link href="/en">{t("homeLinkTitle")}</Link>
					</li>
				</ul>
			</nav>
			<div className="flex-1">
				<Input type="text" placeholder={t("searchInputPlaceholder")} className="w-full" />
			</div>
			<nav className="flex justify-end gap-3">
				<Button aria-description="Sign in to your account" size="default" variant="generic">
					{t("loginActionTitle")}
				</Button>
				<Button aria-description="Create an account" size="default" variant="primary">
					{t("signupActionTitle")}
				</Button>
			</nav>
		</header>
	);
}
