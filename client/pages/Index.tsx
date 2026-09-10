import GradientBlob from "@/components/GradientBlob";
import ContactCta from "@/components/ContactCta";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <div className="relative overflow-hidden border-b border-border">
        <GradientBlob
          id="blob-hero"
          className="hero-bubble hero-bubble-large pointer-events-none absolute -right-16 -top-20 hidden w-[220px] rounded-full opacity-65 sm:block sm:w-[280px] lg:-right-6 lg:-top-24 lg:w-[380px]"
        />
        <GradientBlob
          id="blob-hero-sm"
          className="hero-bubble hero-bubble-small pointer-events-none absolute -bottom-10 -left-10 w-[100px] rounded-full opacity-50 sm:w-[120px] lg:-left-7 lg:bottom-10 lg:w-[140px]"
        />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1024px] -translate-y-2 flex-col items-center justify-center px-4 py-10 sm:min-h-[calc(100vh-5rem)] sm:-translate-y-8 sm:px-8 sm:py-20 lg:py-24">
          <div className="flex w-full flex-col items-center border border-border px-4 py-6 sm:px-12 sm:py-10">
            <h1 className="text-center font-serif text-[40px] font-light leading-[1] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[84.675px] lg:leading-[84.675px] lg:tracking-[-1.694px]">
              Selma Bjørtomt Keser
            </h1>
          </div>

          <div className="flex w-full flex-col items-center gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <p className="font-serif text-xl font-semibold italic leading-[1.5] tracking-[-0.01em] text-foreground sm:text-[28.225px]">
              UX design student
            </p>
            <span className="text-xs uppercase tracking-[1.2px] text-primary">
              Portefølje 2026
            </span>
          </div>

          <div className="w-full pt-5">
            <p className="max-w-[540px] text-base font-light leading-[1.75] text-muted-foreground sm:text-[16.8px]">
              Nysgjerrig på mennesker, psykologi og hvordan vi samhandler med
              teknologi :)
            </p>
          </div>

          <div className="flex w-full justify-center pt-8 sm:justify-start">
            <Link
              to="/"
              state={{ scrollTo: "prosjekter" }}
              className="hero-cta-shake inline-flex items-center gap-3 bg-primary px-[22.4px] py-[10.4px] text-[12.8px] uppercase tracking-[1.28px] text-primary-foreground transition-opacity hover:opacity-90"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById("prosjekter")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Se prosjekter
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </div>

      <FeaturedProjects />

      <section className="mx-auto max-w-[1152px] border-t border-border px-6 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:pt-24">
        <h2 className="font-serif text-2xl font-normal leading-[1.2] text-foreground sm:text-[30px]">
          Andre prosjekter
        </h2>

        <article className="mt-10 grid border-b border-border sm:mt-14 sm:grid-cols-2">
          <div className="order-1 flex min-h-0 flex-col items-stretch justify-start px-4 py-8 sm:order-1 sm:min-h-0 sm:px-10 sm:py-12 lg:px-14">
            <h3 className="font-serif text-2xl font-medium leading-[1.25] text-foreground sm:text-[30px]">
              Fugleadvokatene
            </h3>
            <p className="mt-2 font-serif text-base font-light italic leading-[1.5] text-muted-foreground">
              Innholdsproduksjon
            </p>
            <p className="mt-6 max-w-[430px] text-base leading-[1.625] text-foreground">
              Som frivillig i SoMe-teamet til Fugleadvokatene utformer jeg
              innhold for å spre kunnskap om byfugler og hjelpe skadde eller
              nødstilte fugler med å finne trygge for-alltid-hjem.
            </p>
          </div>

          <figure className="order-2 overflow-hidden bg-background sm:order-2 sm:aspect-auto sm:min-h-[360px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F01f53c0f80d840f38fa23cd685dff678?format=webp&width=800&height=1200"
              alt="innhold til sosiale medier for Fugleadvokatene"
              className="h-auto w-full object-contain sm:h-full sm:object-cover"
            />
          </figure>
        </article>
      </section>

      <ContactCta />
    </div>
  );
}
