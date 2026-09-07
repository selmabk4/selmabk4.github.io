import ContactCta from "@/components/ContactCta";
import { ChevronLeft, ChevronRight, GitBranch, ListChecks, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface ProjectDetailData {
  title: string;
  summary: string;
  challenge: string;
  role: string;
  focus: string;
  timeframe: string;
  tools: string;
  toolIcon?: string;
  toolIconAlt?: string;
  secondaryToolIcon?: string;
  secondaryToolIconAlt?: string;
  introHeading?: string;
  prototype?: boolean;
  simInnlandetContent?: boolean;
  background: string;
  research: string;
  insights?: string;
  insightsImage?: string;
  insightsImageAlt?: string;
  insightsSummary?: string;
  iterationsImage?: string;
  iterationsImageAlt?: string;
  iterationsSecondaryImage?: string;
  iterationsSecondaryImageAlt?: string;
  projectImage?: string;
  projectImageAlt?: string;
  heroImage?: string;
  heroImageAlt?: string;
  hideIdeation?: boolean;
  hideIterations?: boolean;
  marketingImage?: string;
  marketingImageAlt?: string;
  payoutPartnerContent?: boolean;
}

const personaImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F743ba3e3b9c5449d9862fdef22fef2d3?format=webp&width=1600&height=2400",
    alt: "Persona: studentkunde",
    label: "Studentkunde",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fd5b3b6ce21ea44f2b1808b29c6904a96?format=webp&width=1600&height=2400",
    alt: "Persona: Norvald kunde",
    label: "Norvald kunde",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F877981ebf27b430089d874ff04ded6b6?format=webp&width=1600&height=2400",
    alt: "Persona: Tjønnås kunde",
    label: "Tjønnås kunde",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F5ef593efd55949198465dce5e23eb94f?format=webp&width=1600&height=2400",
    alt: "Persona: ansatt",
    label: "Ansatt",
  },
];

export default function ProjectDetail({ project }: { project: ProjectDetailData }) {
  const [personaIndex, setPersonaIndex] = useState(0);
  return (
    <article>
      <section className="border-b border-primary-foreground/20 bg-primary text-primary-foreground">
        <div className="relative mx-auto flex min-h-[400px] max-w-[1152px] flex-col px-6 pb-10 pt-10 sm:min-h-[520px] sm:px-8 sm:pb-16 sm:pt-14">
          <Link
            to="/"
            state={{ scrollTo: "prosjekter" }}
            className="inline-flex items-center gap-3 pr-24 text-xs uppercase tracking-[1.2px] text-primary-foreground/80 transition-colors hover:text-primary-foreground sm:pr-0"
          >
            <span aria-hidden="true">←</span>
            Tilbake til prosjekter
          </Link>

          <div className="mt-auto max-w-[700px] pb-10 pt-16 sm:pb-0 sm:pt-24">
            <h1 className="max-w-[760px] font-serif text-5xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-7xl lg:text-[84px]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-[560px] text-sm leading-7 text-primary-foreground/90 sm:text-base">
              {project.summary}
            </p>
          </div>
          {project.heroImage ? (
            <img
              src={project.heroImage}
              alt={project.heroImageAlt ?? "Illustrasjon for prosjektet"}
              className="absolute right-4 top-6 h-20 w-20 object-contain sm:bottom-8 sm:right-8 sm:top-auto sm:h-64 sm:w-64"
            />
          ) : null}
        </div>
      </section>

      <div className="mx-auto max-w-[896px] px-6 pb-20 sm:px-8 sm:pb-28">
        <section className="border-b border-border py-16 sm:py-24">
          <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
            {project.introHeading ?? "Om prosjektet"}
          </p>
          <div className="mb-10 h-1 w-12 bg-primary" />
          <p className="max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
            {project.challenge}
          </p>

          <dl className="mt-12 grid gap-x-6 gap-y-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">Ansvarsområde</dt>
              <dd className="leading-6 text-foreground">{project.role}</dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">Fokus</dt>
              <dd className="leading-6 text-foreground">{project.focus}</dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">Tidsramme</dt>
              <dd className="leading-6 text-foreground">{project.timeframe}</dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">Verktøy</dt>
              <dd className="flex items-center gap-3 leading-6 text-foreground">
                {project.toolIcon ? (
                  <img
                    src={project.toolIcon}
                    alt={project.toolIconAlt ?? "Figma"}
                    className="h-8 w-8 rounded-lg object-contain shadow-sm"
                  />
                ) : null}
                {project.tools ? <span>{project.tools}</span> : null}
                {project.secondaryToolIcon ? (
                  <img
                    src={project.secondaryToolIcon}
                    alt={project.secondaryToolIconAlt ?? "Claude"}
                    className="h-14 w-16 object-contain"
                  />
                ) : null}
              </dd>
            </div>
          </dl>
        </section>

        {project.prototype ? (
          <section className="border-b border-border py-16 sm:py-24">
            <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
              Prototype
            </p>
            <div className="h-1 w-12 bg-primary" />
            <p className="mt-10 max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
              SIMInnlandet presenterte sin VR-løsning med interaktive, AI-drevne pasientscenarioer. Vi videreutviklet og visualiserte konseptet med særlig vekt på onboardingen, for å skape trygge og forutsigbare rammer før brukerne går inn i scenarioene.
            </p>
            <div className="mx-auto mt-10 w-full max-w-[900px] overflow-hidden rounded-[18px] border border-foreground/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
              <iframe
                src="https://embed.figma.com/proto/1B5k7km5tDQS2yXKiLsBsO/SIMInnlandet?page-id=0%3A1&node-id=1-1088&viewport=1730%2C808%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1250&embed-host=share"
                title="SIMInnlandet prototype"
                allowFullScreen
                loading="lazy"
                className="mx-auto block h-[450px] w-full max-w-[800px] border border-black/10"
              />
            </div>
          </section>
        ) : null}

        {project.simInnlandetContent ? (
          <>
            <section className="border-b border-border py-16 sm:py-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Designprosess og metoder
              </p>
              <div className="h-1 w-12 bg-primary" />
              <a
                href="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F319f96b4e5dd496e83c29c6b5483e68c?format=webp&width=800&height=1200"
                target="_blank"
                rel="noreferrer"
                className="mt-10 block overflow-hidden border border-border bg-white"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F319f96b4e5dd496e83c29c6b5483e68c?format=webp&width=800&height=1200"
                  alt="Oversikt over designprosessen for SIMInnlandet"
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </a>
            </section>

            <section className="border-b border-border py-16 sm:py-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Innsiktsarbeid
              </p>
              <div className="h-1 w-12 bg-primary" />
              <div className="mt-8 grid items-start gap-10 sm:mt-10 sm:grid-cols-[minmax(0,340px)_minmax(0,1fr)] sm:gap-12">
                <figure className="w-full overflow-hidden border border-border bg-white shadow-sm">
                  <div className="aspect-square bg-[#f0eef8]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F167b49a27f2e4958b48ba443e556f75b?format=webp&width=800&height=1200"
                      alt="Maskoten til løsningen: XR-ekorn"
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <figcaption className="border-t border-border bg-background px-6 py-4 text-sm text-muted-foreground sm:px-8">
                    Løsningens maskot
                  </figcaption>
                </figure>
                <div>
                  <p className="max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
                    Designprosessens innsiktsarbeid besto av å utforske lignende løsninger og undersøke opplæring i XR-miljøer. I tillegg gjennomførte vi en spørsmålsrunde med SIMInnlandet, hvor vi fikk teste den allerede eksisterende VR-løsningen.
                  </p>
                  <div className="mt-8 bg-primary px-6 py-7 text-primary-foreground sm:px-8 sm:py-9">
                    <p className="mb-3 text-xs uppercase tracking-[1.2px]">Hovedfunn</p>
                    <p className="text-lg leading-8 sm:text-2xl sm:leading-9">
                      VR-scenarioene krever et intuitivt UX-design for å eliminere teknisk friksjon, slik at helsepersonellet kan rette fullt fokus mot selve læringen.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-b border-border py-16 sm:py-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Personas
              </p>
              <div className="h-1 w-12 bg-primary" />
              <p className="mt-10 max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
                Personas var et sentralt verktøy for å sikre et konstant brukerfokus gjennom prosjektet. Da målgruppen bestod av helsepersonell på tvers av ulike aldre, fagfelt og teknisk kompetanse, var det avgjørende å designe en inkluderende og intuitiv brukeropplevelse som fungerer like godt uavhengig av brukerens digitale erfaring.
              </p>
              <div className="mt-8 bg-primary px-6 py-7 text-primary-foreground sm:px-8 sm:py-9">
                <p className="text-lg leading-8 sm:text-2xl sm:leading-9">
                  XR-løsninger kan oppleves kompliserte og tekniske. God UX er nøkkelen til å gjøre XR til et brukervennlig læringsverktøy.
                </p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <figure className="overflow-hidden border border-border bg-white">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F8e5b32384bf34c4a8fadf819a8989b2a?format=webp&width=800&height=1200"
                    alt="Persona: Ellinor"
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </figure>
                <figure className="overflow-hidden border border-border bg-white">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F45bdcff8611547418fccec6b2ac5273e?format=webp&width=800&height=1200"
                    alt="Persona: Leif"
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </figure>
              </div>
            </section>

            <section className="border-b border-border py-16 sm:py-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Sitemap
              </p>
              <div className="h-1 w-12 bg-primary" />
              <div className="mt-10 max-w-[680px] space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
                <p>Her er et overblikk over strukturen i løsningen.</p>
                <p>
                  Det ble gjort mange justeringer og iterasjoner på sitemapet, og vi måtte gå tilbake flere ganger. Opprinnelig hadde vi benyttet ordet «veiledning» i stedet for «introduksjon», men SIMInnlandet kommenterte at «veiledning» ofte brukes i en annen sammenheng hos deres ansatte. Derfor måtte vi blant annet justere terminologien i løsningen.
                </p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <figure className="overflow-hidden border border-border bg-white">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F97193a04fb7d40e39545e98b2a0a3851?format=webp&width=800&height=1200"
                    alt="Utkast 1 av sitemap"
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                  <figcaption className="border-t border-border px-6 py-4 text-sm text-muted-foreground">Utkast 1</figcaption>
                </figure>
                <figure className="overflow-hidden border border-border bg-white">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F58a0d0461c574ad9b975cf1e40753a99?format=webp&width=800&height=1200"
                    alt="Endelig sitemap for SIMInnlandet"
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                  <figcaption className="border-t border-border px-6 py-4 text-sm text-muted-foreground">Endelig sitemap</figcaption>
                </figure>
              </div>
            </section>

            <section className="border-b border-border py-16 sm:py-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Refleksjon
              </p>
              <div className="h-1 w-12 bg-primary" />
              <div className="mt-10 max-w-[680px] space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
                <p>
                  Prosjektet med SIMInnlandet var veldig lærerikt, og ga oss muligheten til å bruke kreativitet og gamification-prinsipper til det fulle. Tilbakemeldingene vi fikk underveis førte til at løsningen ble mer engasjerende og brukervennlig. Det var også spennende å jobbe med UX i et XR-miljø, noe som utfordret ferdighetene våre i Figma.
                </p>
                <p>
                  Selv om prosjektet resulterte i karakteren A, er det fortsatt rom for flere iterasjoner. Vi fokuserte mest på onboarding-delen av løsningen, noe som førte til at debrief-delen ikke fikk like mye oppmerksomhet. Debrief-delen av prototypen er derfor ikke like engasjerende. Det kunne også blitt eksperimentert mer med fargevalget i løsningen, ved å ikke bare ta utgangspunkt i SIMInnlandets eksisterende fargepalett.
                </p>
              </div>
            </section>

            <section className="border-b border-border py-16 sm:py-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Se prototypeløsningen
              </p>
              <div className="h-1 w-12 bg-primary" />
              <p className="mt-10 text-sm leading-7 text-muted-foreground sm:text-base">
                Lenke til prototypen i Figma: {" "}
                <a
                  href="https://www.figma.com/proto/1B5k7km5tDQS2yXKiLsBsO/SIMInnlandet?page-id=0%3A1&node-id=1-1204&p=f&viewport=417%2C378%2C0.02&t=eJw5DiNaEL4I5Oyb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1250"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  Åpne Figma-prototypen
                </a>
              </p>
              <figure className="mt-10 overflow-hidden border border-border bg-white">
                <a
                  href="https://www.figma.com/proto/1B5k7km5tDQS2yXKiLsBsO/SIMInnlandet?page-id=0%3A1&node-id=1-1204&p=f&viewport=417%2C378%2C0.02&t=eJw5DiNaEL4I5Oyb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1250"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fee7e8eeb2dd747cea7779fdce51012f9?format=webp&width=800&height=1200"
                    alt="Skjermbilde av prototype-løsningen"
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </a>
                <figcaption className="border-t border-border px-6 py-4 text-sm text-muted-foreground sm:px-8">
                  Bildet av løsningen
                </figcaption>
              </figure>
            </section>
          </>
        ) : null}

        {project.projectImage ? (
          <>
            <div className="pt-16 sm:pt-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Løsning
              </p>
              <div className="h-1 w-12 bg-primary" />
              <p className="mt-10 max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
                Gjennom brukerintervjuene identifiserte vi en ubrukt markedsmulighet knyttet til bestilling av gavepakker. Tidligere fantes det ingen offisiell salgskanal for dette utover uformelle meldinger på Instagram, noe som ga svært lav produktsynlighet og gjorde tilbudet ukjent for de fleste kunder. Som svar på dette konseptualiserte og designet vi en prototype med en dedikert, visuell bestillingsflyt. Konseptet øker synligheten og fjerne friksjon i kjøpsprosessen, og viser potensialet for hvordan bedriften kan skalere.
              </p>
            </div>
            <figure className="mt-10 overflow-hidden border border-border bg-white">
              <img
                src={project.projectImage}
                alt={project.projectImageAlt ?? "Prosjektbilde for Tjønnås og Norvald"}
                loading="lazy"
                className="h-auto w-full origin-center scale-125 object-contain"
              />
            </figure>
          </>
        ) : null}

        {project.insights ? (
          <section className="border-b border-border py-16 sm:py-24">
            <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
              Innsiktsarbeid
            </p>
            <div className="mb-10 h-1 w-12 bg-primary" />
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="border border-border p-6">
                <div className="mb-8 flex items-center justify-between text-primary">
                  <p className="text-xs uppercase tracking-[1.2px] text-foreground">
                    Datagrunnlag
                  </p>
                  <Users aria-hidden="true" className="h-5 w-5" />
                </div>
                <p className="font-serif text-6xl leading-none text-foreground">20</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Intervjuer med kunder og ansatte hos Tjønnås og Norvald (1 eget
                  intervju + 19 fra klassen).
                </p>
              </article>

              <article className="border border-border p-6">
                <div className="mb-8 flex items-center justify-between text-primary">
                  <p className="text-xs uppercase tracking-[1.2px] text-foreground">
                    Metode
                  </p>
                  <GitBranch aria-hidden="true" className="h-5 w-5" />
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Analyse og strukturering av funn ved hjelp av Affinity Map og personas.
                </p>
              </article>

              <article className="border border-border p-6">
                <div className="mb-8 flex items-center justify-between text-primary">
                  <p className="text-xs uppercase tracking-[1.2px] text-foreground">
                    Funn
                  </p>
                  <ListChecks aria-hidden="true" className="h-5 w-5" />
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>Mangelfull informasjon</li>
                  <li>Vanskelig bestilling/booking</li>
                  <li>Lav synlighet</li>
                  <li>Intern kommunikasjon</li>
                </ul>
              </article>
            </div>
            {project.insightsImage ? (
              <figure className="mt-8 overflow-hidden border border-border bg-white">
                <img
                  src={project.insightsImage}
                  alt={project.insightsImageAlt ?? "Affinity map"}
                  loading="lazy"
                  className="h-auto max-h-[280px] w-full object-contain object-left sm:max-h-[360px]"
                />
                {project.insightsSummary ? (
                  <figcaption className="border-t border-border bg-background px-6 py-5 text-sm leading-7 text-muted-foreground sm:px-8">
                    {project.insightsSummary}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
            <div className="mt-12">
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[1.2px] text-muted-foreground">
                  Personas
                </p>
                <p className="text-xs text-muted-foreground" aria-live="polite">
                  {personaIndex + 1} / {personaImages.length}
                </p>
              </div>
              <div className="relative overflow-hidden border border-border bg-white">
                <img
                  src={personaImages[personaIndex].src}
                  alt={personaImages[personaIndex].alt}
                  loading="lazy"
                  className="mx-auto h-auto max-h-[500px] w-full object-contain"
                />
                <div className="flex items-center justify-between border-t border-border bg-background px-4 py-3 sm:px-6">
                  <p className="text-sm text-foreground">
                    {personaImages[personaIndex].label}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      aria-label="Forrige persona"
                      onClick={() =>
                        setPersonaIndex(
                          (current) =>
                            (current - 1 + personaImages.length) % personaImages.length,
                        )
                      }
                      className="border border-border p-2 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronLeft aria-hidden="true" className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Neste persona"
                      onClick={() =>
                        setPersonaIndex((current) => (current + 1) % personaImages.length)
                      }
                      className="border border-border p-2 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronRight aria-hidden="true" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-primary px-6 py-7 text-primary-foreground sm:px-8 sm:py-9">
              <p className="mb-3 text-xs uppercase tracking-[1.2px]">Hovedfunn</p>
              <p className="text-lg leading-8 sm:text-2xl sm:leading-9">
                Utydelig kobling og ubrukt potensial: Kundene forstår ikke sammenhengen
                mellom Tjønnås i sentrum og Norvald på Gjøvik gård, og etterspør en
                mulighet for å bestille varer.
              </p>
            </div>
          </section>
        ) : null}

        {!project.hideIdeation ? (
          <section className="border-b border-border py-16 sm:py-24">
            <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
              Ideutvikling
          </p>
          <div className="h-1 w-12 bg-primary" />
          <div className="mt-10 max-w-[680px]">
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Videre begynte vi å skissere ut hvordan vi ønsket at løsningen skulle se ut.
              Her ble det en del diskusjoner om hva som er best for brukeren, og hvordan vi
              kunne imøtekomme behovene deres. Vi benyttet metoden crazy 8s for å oppnå
              flest mulig forslag på kort tid.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <figure className="aspect-[4/3] overflow-hidden border border-border bg-white">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F24c0cc29e31149d5b55c1b9493db65f2?format=webp&width=1600&height=2400"
                  alt="Skisser av nettsidens struktur og innhold"
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </figure>
              <figure className="aspect-[4/3] overflow-hidden border border-border bg-white">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fd80c59d37cca49b187e8faa9c2bf27e3?format=webp&width=1600&height=2400"
                  alt="Skisser av nettsidens funksjoner og innhold"
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </figure>
              <figure className="aspect-[4/3] overflow-hidden border border-border bg-white">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F44ffc818c358433eb8ee9c39af959e3a?format=webp&width=1600&height=2400"
                  alt="Digitale skisser av mobil løsning og bestilling"
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </figure>
              <figure className="col-span-full overflow-hidden border border-border bg-white">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F77440316bc664975af4bcd7cc9e887ce?format=webp&width=1600&height=2400"
                  alt="Sitemap for Tjønnås og Norvald"
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </figure>
            </div>
          </div>
          </section>
        ) : null}

        {!project.hideIterations ? (
          <section className="border-b border-border py-16 sm:py-24">
            <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
              Egne iterasjoner
          </p>
          <div className="h-1 w-12 bg-primary" />
          <p className="mt-10 max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
            Etter prosjektslutt gjorde jeg egne iterasjoner for å styrke informasjonsarkitekturen og den visuelle lesbarheten.
          </p>
          {project.iterationsImage ? (
            <figure className="mt-10 overflow-hidden border border-border bg-white">
              <img
                src={project.iterationsImage}
                alt={project.iterationsImageAlt ?? "Før- og etterbilder av nettsiden"}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </figure>
          ) : null}
          {project.iterationsSecondaryImage ? (
            <figure className="mt-6 overflow-hidden border border-border bg-white">
              <img
                src={project.iterationsSecondaryImage}
                alt={project.iterationsSecondaryImageAlt ?? "Flere før- og etterbilder av nettsiden"}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </figure>
          ) : null}
          </section>
        ) : null}

        {project.marketingImage ? (
          <section className="border-b border-border py-16 sm:py-24">
            <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
              Ny markedsføringsside
            </p>
            <div className="h-1 w-12 bg-primary" />
            <figure className="mt-10 overflow-hidden border border-border bg-white">
              <img
                src={project.marketingImage}
                alt={project.marketingImageAlt ?? "Ny markedsføringsside for PayoutPartner"}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </figure>
          </section>
        ) : null}

        {project.payoutPartnerContent ? (
          <>
            <section className="border-b border-border py-16 sm:py-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Spørreundersøkelser
              </p>
              <div className="h-1 w-12 bg-primary" />
              <p className="mt-10 max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
                Spørreundersøkelsene ga et bredere bilde av hvordan kundene opplever PayoutPartner plattformen i dag. Dette la også grunnlaget for hva jeg kunne spørre om i brukerintervjuene.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <article className="border border-border bg-background p-6 sm:p-8">
                  <p className="font-serif text-5xl font-medium leading-none text-foreground sm:text-6xl">8</p>
                  <p className="mt-5 text-xs uppercase tracking-[1.2px] text-muted-foreground">Spørreundersøkelser</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Jeg lagde åtte spørreundersøkelser for å utforske ulike type brukerreiser.
                  </p>
                </article>
                <article className="border border-border bg-background p-6 sm:p-8">
                  <p className="font-serif text-5xl font-medium leading-none text-foreground sm:text-6xl">78</p>
                  <p className="mt-5 text-xs uppercase tracking-[1.2px] text-muted-foreground">Totalt antall svar</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Spørreundersøkelsene resulterte i 78 svar fra et bredt spekter med frilansere og oppdragstakere
                  </p>
                </article>
              </div>
            </section>

            <section className="border-b border-border py-16 sm:py-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Intervjuer
              </p>
              <div className="h-1 w-12 bg-primary" />
              <p className="mt-10 max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
                Jeg planla og ledet 11 dybdeintervjuer kombinert med brukertesting. Innsikten ble fortløpende analysert i Affinity Maps. Intervjuene, inkludert testing med skjermleseren VoiceOver, avdekket stor skepsis til KI-automatisering. Dette ble et vendepunkt som endret prosjektets retning mot transparente og tilgjengelige KI-løsninger.
              </p>
              <figure className="mt-10 overflow-hidden border border-border bg-white">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F9b1e882ab1a5422ebf338006e7468689?format=webp&width=800&height=1200"
                  alt="Bilde fra intervjuer og brukertesting"
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </figure>
            </section>

            <section className="border-b border-border py-16 sm:py-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Interessante funn
              </p>
              <div className="h-1 w-12 bg-primary" />
              <p className="mt-10 max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
                Da praksisperioden startet, var hovedhypotesen at en helautomatisert KI-tjeneste ville gi størst mulig verdi og effektivitet. Da vi gikk inn i innsiktsfasen og analyserte brukernes faktiske utfordringer, smertepunkter og arbeidshverdag, avkreftet dataene denne antakelsen. Det viste seg at en slik automatisering ikke ville svare til de reelle behovene i målgruppen, og innsikten ble derfor avgjørende for å forkaste den opprinnelige planen til fordel for en løsning bedre forankret i brukernes premisser.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <article className="border border-border bg-background p-6 sm:p-8">
                  <p className="font-serif text-xl font-medium leading-tight break-normal text-foreground sm:text-2xl">
                    Mobilfokus fremfor app
                  </p>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    Brukerne foretrakk å bruke plattformen på mobil, men uttrykte en utbredt «app-tretthet» for tjenester de sjelden bruker. For å unngå friksjon prioriterte vi derfor å designe en responsiv webløsning fremfor en egen applikasjon, i tillegg til å anbefale bruk av mobile-first fremover
                  </p>
                </article>
                <article className="border border-border bg-background p-6 sm:p-8">
                  <p className="font-serif text-xl font-medium leading-tight break-normal text-foreground sm:text-2xl">
                    Tilgjengelighet og klarspråk
                  </p>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    Evaluering med skjermleseren VoiceOver og dybdeintervjuer avdekket barrierer knyttet til dårlig merkede knapper og tung bransjeterminologi. Dette førte til et forsterket fokus og anbefaling om WCAG-samsvar og implementering av klarspråk.
                  </p>
                </article>
                <article className="border border-border bg-background p-6 sm:p-8">
                  <p className="font-serif text-xl font-medium leading-tight break-normal text-foreground sm:text-2xl">
                    Transparens rundt KI
                  </p>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    Målgruppen var skeptiske til full KI-automatisering og deling av data med tredjeparter. Innsikten endret prosjektets retning: Istedenfor automatisering konseptualiserte jeg en valgfri og transparent KI-assistent som ga brukerne full kontroll over prosessen.
                  </p>
                </article>
              </div>
            </section>

            <section className="border-b border-border py-16 sm:py-24">
              <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                Oppsummering
              </p>
              <div className="h-1 w-12 bg-primary" />
              <p className="mt-10 max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
                Praksisperioden viste hvor viktig det er å la brukernes behov styre retningen i et prosjekt. Innsikten førte til at jeg gikk bort fra full automatisering og heller fokuserte på en tilgjengelig, transparent og valgfri KI-assistent som gir brukerne bedre forståelse og kontroll.
              </p>
            </section>
          </>
        ) : null}

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
