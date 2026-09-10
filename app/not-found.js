import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-shell">
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Error 404</p>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-[2.6rem]">
          This Page Could Not Be Found
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
          The page you were looking for may have been moved or renamed. You can return home or
          submit an assistance request.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to Home
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
          <Button href="/get-assistance" variant="outline" size="lg">
            Get Assistance
          </Button>
        </div>
      </div>
    </section>
  );
}
