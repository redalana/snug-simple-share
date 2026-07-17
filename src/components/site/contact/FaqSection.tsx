import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "@/components/site/Eyebrow";
import { FAQS } from "./data";

export function FaqSection() {
  return (
    <section className="bg-white py-[110px]">
      <div className="mx-auto w-[85%] max-w-[95rem] px-4 lg:px-6">
        <div className="text-center">
          <Eyebrow align="center">FAQ</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-10 grid w-full grid-cols-1 gap-x-6 md:grid-cols-2"
        >
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="mb-3 overflow-hidden rounded-2xl border border-border/70 bg-secondary/25 px-5 transition-all duration-200 ease-out hover:border-primary/30 hover:bg-white hover:shadow-[0_10px_28px_-20px_rgba(15,23,42,0.25)] data-[state=open]:border-primary/40 data-[state=open]:bg-white data-[state=open]:shadow-[0_14px_36px_-18px_rgba(15,23,42,0.28)]"
            >
              <AccordionTrigger className="py-4 text-left text-[15px] font-semibold text-foreground hover:no-underline">

                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
