import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function CTASection({
  eyebrow = "Next Step",
  title = "Start With a Simple Conversation",
  description = "Tell us about your situation and understand the possible next steps.",
  primary = { label: "Get Assistance", href: "/get-assistance" },
  secondary,
}) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink px-6 py-14 md:px-14 md:py-16">
          <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-70" />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand/20 blur-[100px]"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-light">
              {eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-white md:text-[2.6rem]">
              {title}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/60 md:text-base">
              {description}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={primary.href} size="lg">
                {primary.label}
                <ArrowRight size={17} aria-hidden="true" />
              </Button>
              {secondary && (
                <Button href={secondary.href} variant="ghostLight" size="lg">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
