import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

const ALPHABET = ["A", "B", "C", "D", "E", "F"];

const FEATURES = [
  {
    index: "01",
    title: "Letter by Letter",
    description:
      "A focused, distraction-free way to recognize and pronounce each letter of the alphabet.",
  },
  {
    index: "02",
    title: "Sound & Shape",
    description:
      "Pair each character with its sound to build lasting recognition through repetition.",
  },
  {
    index: "03",
    title: "Crafted Pace",
    description:
      "Designed to be calm, deliberate, and quietly playful — for curious minds of any age.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <header className="w-full border-b border-foreground/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-xl tracking-tight"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background text-xs font-sans font-medium"
            >
              A
            </span>
            <span className="font-medium">Alphabet Studio</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <Link
              href="#letters"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Letters
            </Link>
            <Link
              href="#approach"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Approach
            </Link>
            <Link
              href="#journal"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Journal
            </Link>
          </div>

          <Link
            href="#start"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground px-4 py-2 text-sm font-medium transition-all hover:bg-foreground hover:text-background"
          >
            Begin
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex-1 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-32 lg:px-10">
          <div className="animate-fade-up flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>A modern learning studio</span>
          </div>

          <h1 className="animate-fade-up mt-8 max-w-5xl font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] tracking-tight text-pretty">
            Where every letter <em className="italic text-accent">begins</em> a story.
          </h1>

          <div className="animate-fade-up mt-10 grid gap-10 md:grid-cols-3 md:gap-16">
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-2 md:text-lg">
              An unhurried, beautifully crafted way to discover the alphabet.
              We pair quiet typography with thoughtful pacing — so learning
              feels less like a task, and more like a small daily ritual.
            </p>
            <div className="flex items-start md:justify-end">
              <Link
                href="#letters"
                className="group inline-flex items-center gap-3 text-sm font-medium"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                Explore the alphabet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Letters grid */}
      <section
        id="letters"
        className="border-t border-foreground/10 bg-background"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Volume 01
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
                The first six.
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
              Each letter has a personality. Hover to feel it.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-foreground/15 bg-foreground/15 sm:grid-cols-3 lg:grid-cols-6">
            {ALPHABET.map((letter, i) => (
              <li
                key={letter}
                className="group relative aspect-square bg-background transition-colors hover:bg-foreground"
              >
                <button
                  type="button"
                  className="flex h-full w-full flex-col items-center justify-center"
                  aria-label={`Letter ${letter}`}
                >
                  <span className="font-serif text-7xl leading-none tracking-tight transition-colors group-hover:text-background md:text-8xl">
                    {letter}
                  </span>
                  <span className="absolute bottom-4 left-4 text-[11px] font-mono uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-background/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute bottom-4 right-4 text-[11px] font-mono uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-background/70">
                    {letter.toLowerCase()}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        className="border-t border-foreground/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Our approach
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                Calm by design.
              </h2>
            </div>

            <ul className="grid gap-px overflow-hidden rounded-md border border-foreground/15 bg-foreground/15 md:col-span-8 md:grid-cols-3">
              {FEATURES.map((feature) => (
                <li
                  key={feature.index}
                  className="flex flex-col gap-6 bg-background p-6 transition-colors hover:bg-muted md:p-8"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {feature.index}
                  </span>
                  <h3 className="font-serif text-2xl leading-tight tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="start"
        className="border-t border-foreground/10 bg-foreground text-background"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-20 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-28">
          <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
            Begin with <em className="italic text-accent">A</em>. Then keep going.
          </h2>

          <Link
            href="#letters"
            className="group inline-flex items-center gap-3 rounded-full bg-background px-6 py-4 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            Start the alphabet
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center lg:px-10">
          <p>© {new Date().getFullYear()} Alphabet Studio.</p>
          <p className="font-mono text-xs uppercase tracking-wider">
            A — Z / Made with care
          </p>
        </div>
      </footer>
    </div>
  );
}
