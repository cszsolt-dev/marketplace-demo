import Link from "next/link";
import { Button, Input } from "@marketplace/ui";

export default function AppHeader() {
	return (
		<header className="bg-midnight-900 m-3 grid h-12 grid-cols-[1fr_800px_1fr] items-center gap-4 rounded-lg px-4 py-2">
			<nav>
				<ul>
					<li>
						<Link href="/en">Home</Link>
					</li>
				</ul>
			</nav>
			<div className="flex-1">
				<Input type="text" placeholder="Search products" className="w-full" />
			</div>
			<nav className="flex justify-end gap-3">
				<Button
					className="hover:bg-midnight-700 outline-1 outline-[#fff2] hover:outline-[#fff6]"
					aria-description="Sign in to your account"
				>
					Login
				</Button>
				<Button
					className="bg-midnight-700 outline-1 outline-[#fff0] hover:outline-[#fff6]"
					aria-description="Create an account"
				>
					Signup
				</Button>
			</nav>
		</header>
	);
}
