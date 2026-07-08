import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-orange-500">
        404
      </p>
      <h1 className="mb-4 text-4xl font-semibold">Page not found</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </main>
  );
}
