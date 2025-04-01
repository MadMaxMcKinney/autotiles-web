import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold">Autotiles</h1>
            <p className="text-lg">A collection of modular automotive tools and resources, all in one place</p>
            <Button className="mt-4" asChild>
                <Link href="/app">Go to App</Link>
            </Button>
        </main>
    );
}
