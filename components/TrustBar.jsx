import Icon from "./Icon";
import { TRUST_ITEMS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section aria-label="Why customers trust us" className="border-b border-line bg-white">
      <div className="container-x">
        <ul className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {TRUST_ITEMS.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-3 border-b border-line px-1 py-5 md:justify-center md:border-b-0 md:px-4 md:py-6"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-shell text-brand">
                <Icon name={item.icon} size={17} />
              </span>
              <span className="text-[13px] font-semibold leading-snug text-ink md:text-sm">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
