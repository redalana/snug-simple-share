import { useState } from "react";
import { DEPARTMENTS } from "./data";

export function DepartmentNav() {
  const [active, setActive] = useState<string>(DEPARTMENTS[0].id);
  return (
    <section className="bg-[#111315] py-10 text-white lg:py-12">
      <div className="mx-auto grid max-w-[100rem] items-center gap-8 px-6 lg:grid-cols-[1fr_2.8fr] lg:gap-10 lg:px-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">
            Explore Departments
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold leading-[1.15] sm:text-[26px]">
            Choose your<br />clinical environment
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-7 lg:gap-3">
          {DEPARTMENTS.map((d) => {
            const isActive = d.id === active;
            return (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className={`group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border transition-all ${
                  isActive
                    ? "border-primary bg-primary/5 shadow-[inset_0_0_0_2px_rgb(225,29,46)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05]"
                }`}
              >
                <d.icon
                  className={`h-6 w-6 transition-colors ${isActive ? "text-primary" : "text-white/80"}`}
                  strokeWidth={1.4}
                />
                <span className="text-[12px] font-semibold text-white">{d.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
