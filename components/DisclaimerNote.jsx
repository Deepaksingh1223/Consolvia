import { Info } from "lucide-react";
import { DISCLAIMER } from "@/lib/constants";

export default function DisclaimerNote({ text = DISCLAIMER, className = "" }) {
  return (
    <aside
      className={`flex items-start gap-3 rounded-2xl border border-brand/25 bg-brand/[0.06] p-5 ${className}`}
    >
      <Info size={17} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
      <p className="text-[13.5px] leading-relaxed text-copy/85">{text}</p>
    </aside>
  );
}
