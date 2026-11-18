import { withBase } from "@/lib/paths";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto min-h-[60vh] max-w-[1100px] px-4 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-3 text-5xl font-semibold">Page not found</h1>
      <a className="mt-6 inline-block underline decoration-accent underline-offset-4" href={withBase("/")}>Return home</a>
    </main>
  );
}
