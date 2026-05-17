import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-nails.jpg";
import aboutImg from "@/assets/about-salon.jpg";
import lacqueringImg from "@/assets/lacquering-hands.jpg";
import whyUsImg from "@/assets/why-us-nails.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import hommage1 from "@/assets/hommage-1.jpg";
import hommage2 from "@/assets/hommage-2.jpg";
import hommage3 from "@/assets/hommage-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUXE NAILS — Premium Nagelstudio in Wien" },
      {
        name: "description",
        content:
          "LUXE NAILS Wien — Premium Maniküre, Nagelverlängerung, Nail Art und Pediküre. Eleganz, Präzision und modernes Nageldesign im Herzen Wiens.",
      },
      { property: "og:title", content: "LUXE NAILS — Premium Nagelstudio in Wien" },
      {
        property: "og:description",
        content: "Perfekte Nägel. Perfekter Look. Dein Nagelstudio in Wien.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Maniküre",
    desc: "Klassische und moderne Pflege für gepflegte, gesunde Hände mit perfekter Form.",
  },
  {
    title: "Nagelverlängerung",
    desc: "Hochwertige Modellage mit Gel oder Acryl — natürlich, langlebig und elegant.",
  },
  {
    title: "Nail Art",
    desc: "Individuelle Designs von minimalistisch bis kunstvoll, abgestimmt auf deinen Stil.",
  },
  {
    title: "Pediküre",
    desc: "Wohltuende Fußpflege mit Premium-Produkten für ein gepflegtes Erscheinungsbild.",
  },
];

const prices = [
  { name: "Klassische Maniküre", price: "€25" },
  { name: "Shellac", price: "€35" },
  { name: "French", price: "€40" },
  { name: "Neumodellage", price: "€60" },
  { name: "Auffüllen", price: "€45" },
  { name: "Nail Art", price: "ab €5" },
];

const gallery = [g1, g3, g2, g5, g4, g6];

const team = [
  { name: "Sophia M.", role: "Senior Nail Artist", img: team1 },
  { name: "Elena K.", role: "Nail Designer", img: team2 },
  { name: "Lara V.", role: "Pediküre-Spezialistin", img: team3 },
  { name: "Mia R.", role: "Nail Art Expertin", img: team4 },
];

const reviews = [
  {
    name: "Anna L.",
    text: "Absolut wundervolles Studio! Sophia hat meine Nägel perfekt gemacht — so präzise und elegant. Ich komme definitiv wieder.",
  },
  {
    name: "Julia W.",
    text: "Ein Ort wie aus einem Magazin. Service, Atmosphäre und Ergebnis sind erstklassig. Klare Empfehlung in Wien!",
  },
  {
    name: "Marie H.",
    text: "Ich war noch nie in einem so liebevoll geführten Salon. Man fühlt sich vom ersten Moment an verwöhnt. Die Nail Art ist Kunst pur.",
  },
  {
    name: "Sophie B.",
    text: "Top Qualität, sehr sauber und absolut professionell. Meine Maniküre hält perfekt — schon seit Wochen makellos.",
  },
];

function CTAButton({
  variant = "outline",
  label = "Termin sichern",
}: {
  variant?: "outline" | "outline-light" | "solid";
  label?: string;
}) {
  const base =
    "reveal mt-16 inline-block px-10 py-4 text-xs uppercase tracking-luxury transition-all";
  const styles =
    variant === "solid"
      ? "border border-gold bg-gold text-ink hover:bg-transparent hover:text-gold"
      : variant === "outline-light"
        ? "border border-gold bg-transparent text-beige-light hover:bg-gold hover:text-ink"
        : "border border-gold bg-transparent text-ink hover:bg-gold hover:text-ink";
  return (
    <div className="text-center">
      <a href="#kontakt" className={`${base} ${styles}`}>
        {label}
      </a>
    </div>
  );
}

function Index() {
  useReveal();

  return (
    <div className="bg-background text-ink">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <a
            href="#top"
            className="font-serif text-xl tracking-[0.3em] text-beige-light md:text-2xl"
          >
            LUXE<span className="text-gold"> NAILS</span>
          </a>
          <nav className="hidden items-center gap-10 text-xs uppercase tracking-luxury text-beige-light/80 md:flex">
            <a href="#leistungen" className="transition-colors hover:text-gold">
              Leistungen
            </a>
            <a href="#team" className="transition-colors hover:text-gold">
              Team
            </a>
            <a href="#preise" className="transition-colors hover:text-gold">
              Preise
            </a>
            <a href="#galerie" className="transition-colors hover:text-gold">
              Galerie
            </a>
            <a href="#kontakt" className="transition-colors hover:text-gold">
              Kontakt
            </a>
          </nav>
          <a
            href="#kontakt"
            className="hidden border border-gold/60 px-5 py-2 text-[0.7rem] uppercase tracking-luxury text-beige-light transition-all hover:bg-gold hover:text-ink md:inline-block"
          >
            Termin
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Elegante manikürte Nägel im warmen Licht"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/85" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <p className="animate-shimmer-in text-[0.7rem] uppercase tracking-luxury text-gold">
            — Premium Nagelstudio · Wien —
          </p>
          <h1
            className="mt-8 animate-shimmer-in font-serif text-5xl leading-[1.05] text-beige-light md:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.15s" }}
          >
            Perfekte Nägel.
            <br />
            <span className="italic text-gold-soft">Perfekter Look.</span>
          </h1>
          <p
            className="mt-8 animate-shimmer-in max-w-xl text-base font-light text-beige-light/80 md:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Dein Nagelstudio in Wien — wo Präzision auf Eleganz trifft.
          </p>
          <a
            href="#kontakt"
            className="mt-12 inline-block animate-shimmer-in border border-gold bg-gold/10 px-10 py-4 text-xs uppercase tracking-luxury text-beige-light backdrop-blur-sm transition-all hover:bg-gold hover:text-ink"
            style={{ animationDelay: "0.45s" }}
          >
            Termin sichern
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[0.65rem] uppercase tracking-luxury text-beige-light/60">
          Scroll
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-20 text-center">
            <p className="text-[0.7rem] uppercase tracking-luxury text-gold">— 02 —</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl">Unsere Leistungen</h2>
            <div className="gold-divider mx-auto mt-8" />
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal group bg-background p-10 transition-colors hover:bg-beige-light md:p-14"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm italic text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl">{s.title}</h3>
                </div>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.desc}
                </p>
                <div className="mt-8 h-px w-12 bg-gold transition-all duration-500 group-hover:w-24" />
              </div>
            ))}
          </div>
          <CTAButton />
        </div>
      </section>

      {/* WARUM WIR? */}
      <section id="warum-wir" className="bg-beige-light px-6 py-28 md:py-40">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 md:gap-24">
          <div className="reveal relative order-2 md:order-1">
            <img
              src={whyUsImg}
              alt="Elegantes modernes Nageldesign in Weiß und Gold"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -top-6 -left-6 hidden h-32 w-32 border border-gold md:block" />
          </div>
          <div className="reveal order-1 md:order-2">
            <p className="text-[0.7rem] uppercase tracking-luxury text-gold">— Warum wir? —</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              Was uns <span className="italic text-gold">besonders</span> macht.
            </h2>
            <div className="gold-divider mt-8" />
            <ul className="mt-10 space-y-5">
              {[
                "Präzise Arbeit bis ins kleinste Detail",
                "Hochwertige Premium-Produkte",
                "Entspannte, stilvolle Atmosphäre",
                "Individuelle Beratung für deinen perfekten Look",
                "Langanhaltende Ergebnisse",
              ].map((point, i) => (
                <li
                  key={point}
                  className="reveal flex items-baseline gap-4 border-b border-ink/10 pb-4"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className="font-serif text-lg text-gold">✓</span>
                  <span className="font-serif text-base md:text-lg">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <a
                href="#kontakt"
                className="inline-block border border-gold bg-transparent px-10 py-4 text-xs uppercase tracking-luxury text-ink transition-all hover:bg-gold"
              >
                Termin sichern
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IM MOMENT DER PFLEGE — Slogan-Bild */}
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={lacqueringImg}
          alt="Frauenhand bekommt Nägel professionell lackiert"
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
          <p className="reveal text-[0.7rem] uppercase tracking-luxury text-gold">
            — Im Moment der Pflege —
          </p>
          <h2 className="reveal mt-8 font-serif text-4xl leading-[1.1] text-beige-light md:text-6xl lg:text-7xl">
            Bei uns werden Sie
            <br />
            <span className="italic text-gold-soft">richtig verwöhnt.</span>
          </h2>
          <div className="gold-divider reveal mx-auto mt-8" />
          <p className="reveal mt-8 max-w-xl text-base font-light text-beige-light/80 md:text-lg">
            Eine Auszeit für Sinne und Hände — mit Präzision, Ruhe und Liebe zum Detail.
          </p>
          <CTAButton variant="outline-light" />
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-beige-light px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-20 text-center">
            <p className="text-[0.7rem] uppercase tracking-luxury text-gold">— 03 —</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl">Unser Team</h2>
            <div className="gold-divider mx-auto mt-8" />
            <p className="mt-6 font-serif text-lg italic text-muted-foreground md:text-xl">
              Hände, die Kunst erschaffen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {team.map((m, i) => (
              <div
                key={m.name}
                className="reveal group text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                </div>
                <h3 className="mt-6 font-serif text-xl md:text-2xl">{m.name}</h3>
                <p className="mt-2 text-[0.65rem] uppercase tracking-luxury text-gold">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
          <CTAButton />
        </div>
      </section>

      {/* PREISE */}
      <section id="preise" className="bg-ink px-6 py-28 text-beige-light md:py-40">
        <div className="mx-auto max-w-3xl">
          <div className="reveal mb-20 text-center">
            <p className="text-[0.7rem] uppercase tracking-luxury text-gold">— 04 —</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl">Preisliste</h2>
            <div className="gold-divider mx-auto mt-8" />
            <p className="mt-6 text-sm font-light text-beige-light/60">
              Transparente Preise. Kompromisslose Qualität.
            </p>
          </div>
          <ul className="space-y-2">
            {prices.map((p, i) => (
              <li
                key={p.name}
                className="reveal flex items-baseline gap-4 border-b border-beige-light/10 py-6"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="font-serif text-lg md:text-xl">{p.name}</span>
                <span className="flex-1 translate-y-[-4px] border-b border-dotted border-beige-light/20" />
                <span className="font-serif text-xl text-gold md:text-2xl">
                  {p.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="reveal mt-12 text-center text-xs uppercase tracking-luxury text-beige-light/50">
            Individuelle Designs auf Anfrage
          </p>
          <CTAButton variant="outline-light" />
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-20 text-center">
            <p className="text-[0.7rem] uppercase tracking-luxury text-gold">— 05 —</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl">Galerie</h2>
            <div className="gold-divider mx-auto mt-8" />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="reveal group relative overflow-hidden bg-muted"
                style={{
                  transitionDelay: `${i * 70}ms`,
                  aspectRatio: i % 5 === 0 ? "3 / 4" : "4 / 5",
                }}
              >
                <img
                  src={src}
                  alt={`Nail Design ${i + 1}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
              </div>
            ))}
          </div>
          <CTAButton />
        </div>
      </section>

      {/* ÜBER UNS */}
      <section className="bg-beige-light px-6 py-28 md:py-40">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 md:gap-24">
          <div className="reveal relative">
            <img
              src={aboutImg}
              alt="Interieur des LUXE NAILS Studios in Wien"
              loading="lazy"
              width={1200}
              height={1400}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-gold md:block" />
          </div>
          <div className="reveal">
            <p className="text-[0.7rem] uppercase tracking-luxury text-gold">— 06 —</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              Eine Hommage an die Schönheit im Detail.
            </h2>
            <div className="gold-divider mt-8" />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Wir stehen für Qualität, Präzision und modernes Nageldesign. Jeder
              Besuch in unserem Studio ist ein Moment der Ruhe — eine Auszeit,
              die du dir verdienst.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Mit ausgewählten Premium-Produkten und einem Auge für jedes Detail
              kreieren wir Nägel, die Persönlichkeit und Eleganz vereinen.
            </p>
            <div className="mt-10">
              <a
                href="#kontakt"
                className="inline-block border border-gold bg-transparent px-10 py-4 text-xs uppercase tracking-luxury text-ink transition-all hover:bg-gold"
              >
                Termin sichern
              </a>
            </div>
          </div>
        </div>

        {/* Hommage — 3 ergänzende Bilder */}
        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-4 md:mt-28 md:grid-cols-3 md:gap-6">
          {[
            { src: hommage1, alt: "Frauenhand wird mit Pflegecreme verwöhnt" },
            { src: hommage2, alt: "Kundin genießt einen Kaffee während der Behandlung" },
            { src: hommage3, alt: "Kristallschüssel mit feinen Pralinen auf einem Tisch" },
          ].map((img, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden bg-muted"
              style={{ transitionDelay: `${i * 80}ms`, aspectRatio: "4 / 5" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ÖFFNUNGSZEITEN */}
      <section className="bg-background px-6 py-28 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-[0.7rem] uppercase tracking-luxury text-gold">— 07 —</p>
          <h2 className="reveal mt-6 font-serif text-4xl md:text-6xl">Öffnungszeiten</h2>
          <div className="gold-divider reveal mx-auto mt-8" />
          <p className="reveal mt-6 text-sm font-light text-muted-foreground">
            Termine bevorzugt nach Vereinbarung.
          </p>
          <ul className="mx-auto mt-12 max-w-md space-y-2 text-left">
            {[
              { day: "Montag — Freitag", hours: "09:00 — 19:00" },
              { day: "Samstag", hours: "10:00 — 17:00" },
              { day: "Sonntag", hours: "Geschlossen" },
            ].map((o, i) => (
              <li
                key={o.day}
                className="reveal flex items-baseline gap-4 border-b border-border py-5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-serif text-lg">{o.day}</span>
                <span className="flex-1 translate-y-[-4px] border-b border-dotted border-border" />
                <span className="font-serif text-lg text-gold">{o.hours}</span>
              </li>
            ))}
          </ul>
          <CTAButton />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-beige-light px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-20 text-center">
            <p className="text-[0.7rem] uppercase tracking-luxury text-gold">— 08 —</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl">Stimmen unserer Kundinnen</h2>
            <div className="gold-divider mx-auto mt-8" />
            <p className="mt-6 font-serif text-lg italic text-muted-foreground md:text-xl">
              Echte Bewertungen von Google.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {reviews.map((r, i) => (
              <figure
                key={r.name}
                className="reveal flex flex-col justify-between border border-border bg-background p-8 md:p-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span key={k} aria-hidden>★</span>
                  ))}
                </div>
                <blockquote className="mt-6 font-serif text-lg italic leading-relaxed md:text-xl">
                  „{r.text}"
                </blockquote>
                <figcaption className="mt-8 text-[0.65rem] uppercase tracking-luxury text-gold">
                  — {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <CTAButton />
        </div>
      </section>

      {/* KONTAKT */}
      <section
        id="kontakt"
        className="relative overflow-hidden bg-ink px-6 py-28 text-beige-light md:py-40"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="reveal text-[0.7rem] uppercase tracking-luxury text-gold">
            — 09 —
          </p>
          <h2 className="reveal mt-6 font-serif text-4xl md:text-6xl">
            Bereit für deinen <span className="italic text-gold-soft">Glow</span>?
          </h2>
          <div className="gold-divider reveal mx-auto mt-8" />
          <p className="reveal mt-8 text-beige-light/70">
            Wir freuen uns darauf, dich in unserem Studio willkommen zu heißen.
          </p>

          <div className="reveal mt-16 grid gap-12 text-left md:grid-cols-3 md:text-center">
            <div>
              <p className="text-[0.65rem] uppercase tracking-luxury text-gold">
                Adresse
              </p>
              <p className="mt-3 font-serif text-lg">
                Kärntner Straße 12
                <br />
                1010 Wien, Österreich
              </p>
            </div>
            <div>
              <p className="text-[0.65rem] uppercase tracking-luxury text-gold">
                Telefon
              </p>
              <a
                href="tel:+4319876543"
                className="mt-3 block font-serif text-lg transition-colors hover:text-gold"
              >
                +43 1 987 65 43
              </a>
            </div>
            <div>
              <p className="text-[0.65rem] uppercase tracking-luxury text-gold">
                Instagram
              </p>
              <a
                href="https://instagram.com/luxenails.wien"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block font-serif text-lg transition-colors hover:text-gold"
              >
                @luxenails.wien
              </a>
            </div>
          </div>

          <a
            href="tel:+4319876543"
            className="reveal mt-16 inline-block border border-gold bg-gold px-12 py-4 text-xs uppercase tracking-luxury text-ink transition-all hover:bg-transparent hover:text-gold"
          >
            Termin sichern
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink px-6 py-10 text-beige-light/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-beige-light/10 pt-10 text-xs md:flex-row">
          <p className="font-serif tracking-[0.3em]">
            LUXE<span className="text-gold"> NAILS</span>
          </p>
          <p className="uppercase tracking-luxury">
            © {new Date().getFullYear()} — Crafted with elegance in Wien
          </p>
        </div>
      </footer>
    </div>
  );
}
