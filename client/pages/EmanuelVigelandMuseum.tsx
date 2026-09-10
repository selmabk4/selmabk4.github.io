import ContactCta from "@/components/ContactCta";
import { Link } from "react-router-dom";

export default function EmanuelVigelandMuseum() {
  return (
    <article>
      <section className="border-b border-primary-foreground/20 bg-primary text-primary-foreground">
        <div className="mx-auto flex min-h-[440px] max-w-[1152px] flex-col px-6 pb-12 pt-10 sm:min-h-[520px] sm:px-8 sm:pb-16 sm:pt-14">
          <Link
            to="/"
            state={{ scrollTo: "prosjekter" }}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[1.2px] text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <span aria-hidden="true">←</span>
            Tilbake til prosjekter
          </Link>

          <div className="mt-auto max-w-[700px] pt-24">
            <h1 className="max-w-[760px] font-serif text-5xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-7xl lg:text-[84px]">
              Emanuel Vigeland Museum
            </h1>
            <p className="mt-6 max-w-[480px] text-sm leading-7 text-primary-foreground/90 sm:text-base">
              Redesign av Emanuel Vigeland Museums nettside med fokus på universell
              utforming og designsystem.
            </p>
          </div>
        </div>
      </section>


      <div className="mx-auto max-w-[896px] px-6 pb-20 sm:px-8 sm:pb-28">
        <section className="border-b border-border py-16 sm:py-24">
          <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
            Om prosjektet
          </p>
          <div className="mb-10 h-1 w-12 bg-primary" />
          <p className="max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
            Gjennom emnet Designsystemer og universell utforming jobbet vi med
            Emanuel Vigeland Museum som oppdragsgiver. Dette var et
            tverrfaglig prosjekt der jeg samarbeidet med studenter fra grafisk
            design. Oppgaven gikk ut på å modernisere den utdaterte nettsiden
            og bygge et helhetlig designsystem.
          </p>

          <dl className="mt-12 grid gap-x-6 gap-y-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Ansvarsområde
              </dt>
              <dd className="leading-6 text-foreground">
                Mobil prototype, interaktiv betalingsløsning og kravprioritering
                (MoSCoW)
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Fokus
              </dt>
              <dd className="leading-6 text-foreground">
                Universell utforming og designsystemer
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Tidsramme
              </dt>
              <dd className="leading-6 text-foreground">10 uker</dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Verktøy
              </dt>
              <dd className="flex flex-wrap items-center gap-4 leading-6 text-foreground">
                <span className="flex items-center gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fb49189c71da34c50ac1983c08b682755?format=webp&width=800&height=1200"
                    alt="Figma"
                    className="h-8 w-8 rounded-lg object-cover shadow-sm"
                  />
                  Figma
                </span>
                <span className="flex items-center gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F4992bd0e7acb45518dc5ec6d23eb8ba4?format=webp&width=800&height=1200"
                    alt="Adobe Illustrator"
                    className="h-8 w-8 rounded-lg object-cover shadow-sm"
                  />
                  Adobe Illustrator
                </span>
              </dd>
            </div>
          </dl>
        </section>


        <section className="border-b border-border py-16 sm:py-24">
          <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
            Designforslag
          </p>
          <div className="mb-10 h-1 w-12 bg-primary" />
          <div className="overflow-hidden border border-border bg-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F6db69a1cf8c14e0dbb67b1c0a98392c7?format=webp&width=1600"
              alt="Sammenligning av originalt og nytt design for Emanuel Vigeland Museum"
              className="h-auto w-full transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
        </section>

        <section className="border-b border-border py-16 sm:py-24">
          <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
            Utflukt
          </p>
          <div className="mb-10 h-1 w-12 bg-primary" />
          <div className="lg:flex lg:items-start lg:gap-12">
            <div className="mb-10 max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base lg:mb-0 lg:flex-1">
              <p>
                Prosjektet startet med en tur til museet. Slik fikk vi ikke bare innsikt i kunsten og historien der, men også verdifull inspirasjon til å skape museets unike tone of voice.
              </p>
              <p className="mt-6">
                Emanuel Vigeland er bror av Gustav Vigeland, som er kjent for Vigelandsparken i Oslo. Mausoleet er mørkt og malt fra gulv til tak. Atmosfæren er spesiell og mystisk.
              </p>
            </div>
            <div className="relative h-[360px] w-full max-w-[420px] lg:w-[420px] lg:shrink-0">
              {[
                ["804c4de5f06f40e1aca4774ef375ed2b", "Ekskursjon ved Emanuel Vigeland Museum", "left-[2%] top-[-20px] rotate-[-8deg]"],
                ["3296dc351d334508bf9a87f2c2c742f7", "Interiør fra Emanuel Vigeland Museum", "left-[27%] top-[-30px] rotate-[4deg]"],
                ["836da0e5234541a8ba359830c85840ef", "Detalj fra museet", "right-[2%] top-[-22px] rotate-[8deg]"],
                ["20c16f964831427fb466246aa26a920b", "Inngang til museet", "left-[8%] top-[160px] rotate-[5deg]"],
                ["2276d8c78980409bb193cf2087c72fee", "Emanuel Vigeland Museum utvendig", "left-1/2 top-[135px] -translate-x-1/2 rotate-[-4deg]"],
                ["dcbc8502002a4585bd325fb8a143dd8f", "Detalj fra museets interiør", "right-[6%] top-[165px] rotate-[7deg]"],
              ].map(([asset, alt, position]) => (
                <div key={asset} className={`absolute w-[120px] overflow-hidden border border-border bg-white p-1 shadow-[0_2px_12px_rgba(0,0,0,.12)] sm:w-[140px] ${position}`}>
                  <img
                    src={`https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F${asset}?format=webp&width=800&height=1200`}
                    alt={alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="pt-10">
          <Link
            to="/"
            state={{ scrollTo: "prosjekter" }}
            className="inline-flex items-center gap-3 bg-primary px-[17.6px] py-[10.8px] text-xs uppercase tracking-[1.2px] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Alle prosjekter
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <ContactCta />
    </article>
  );
}
