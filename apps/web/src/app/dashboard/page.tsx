import SignOut from "@/components/sign-out";
import { auth } from "@/server/auth";
import { Button } from "@repo/ui/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/ui/card";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Dashboard() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	return (
		<div className="flex justify-center items-center h-dvh">
			<Card>
				<CardHeader>
					<CardTitle>Dashboard</CardTitle>
					<CardDescription>Welcome to your protected dashboard</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Hello, {session?.user.name || session?.user.email}!</p>
					<p>
						This is a protected route. Only authenticated users can see this
						content.
					</p>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button asChild>
						<Link href="/">Back to Home</Link>
					</Button>
					<SignOut />
				</CardFooter>
			</Card>
		</div>
	);
}
