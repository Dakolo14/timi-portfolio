import Image from "next/image";

const experience = [
  {
    role: "Public Relations & Community Engagement Officer",
    org: "Lagos State Government",
    period: "Aug 2023 — Jul 2024",
    note: "Public communication, stakeholder relations and on-the-ground community engagement.",
  },
  {
    role: "Media & Digital Marketing Intern",
    org: "Martad Holdings Limited",
    period: "Jul 2021 — Jun 2022",
    note: "Content creation, social media management and digital campaigns.",
  },
  {
    role: "Broadcast Intern (Part-time)",
    org: "IKD 106.1 FM",
    period: "Jul 2021 — Oct 2021",
    note: "Radio production support and on-air content.",
  },
  {
    role: "Editorial & Research Intern",
    org: "TheNiche Newspaper",
    period: "Jul 2019 — Oct 2019",
    note: "Research, fact-finding and editorial support.",
  },
];

const services = [
  "Social Media Management",
  "Content Creation",
  "Digital Marketing",
  "Public Relations",
  "Community Engagement",
  "Media & Broadcast",
];

const certifications = [
  "HubSpot Academy — Digital Marketing",
  "HubSpot Academy — Social Media Marketing",
];

const contact = [
  { label: "Email", value: "olabiyidaniel3@gmail.com", href: "mailto:olabiyidaniel3@gmail.com" },
  {
    label: "LinkedIn",
    value: "daniel-olabiyi",
    href: "https://www.linkedin.com/in/daniel-olabiyi-730296375",
  },
  { label: "Phone", value: "+234 707 826 2730", href: "tel:+2347078262730" },
  { label: "Location", value: "Lagos, Nigeria" },
];

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 text-xs uppercase tracking-[0.2em] text-muted">
      <span className="tabular-nums">{index}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      {/* Nav */}
      <header className="flex items-center justify-between py-6 text-sm">
        <a href="#top" className="font-medium tracking-tight">
          Daniel Olabiyi
        </a>
        <nav className="flex gap-5 text-muted sm:gap-8">
          <a href="#work" className="transition-colors hover:text-ink">Work</a>
          <a href="#about" className="transition-colors hover:text-ink">About</a>
          <a href="#contact" className="transition-colors hover:text-ink">Contact</a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="grid gap-10 pb-24 pt-16 sm:pt-24 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <div>
            <p className="rise mb-6 flex items-center gap-2 text-sm text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Open to roles in social media, digital marketing &amp; PR
            </p>
            <h1
              className="rise font-serif text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-tight"
              style={{ animationDelay: "80ms" }}
            >
              Clear stories.
              <br />
              <span className="italic text-muted">Engaged</span> audiences.
            </h1>
            <p
              className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted"
              style={{ animationDelay: "160ms" }}
            >
              I&apos;m Daniel — a digital marketing and social media professional with a
              background in Mass Communication. I build engaged audiences through clear
              communication and creative strategy.
            </p>
            <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <a
                href="#work"
                className="rounded-full bg-ink px-6 py-3 text-sm text-bg transition-opacity hover:opacity-85"
              >
                View my experience
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-ink"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="rise w-44 sm:w-52" style={{ animationDelay: "200ms" }}>
            <div className="overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/daniel.jpg"
                alt="Portrait of Daniel Olabiyi"
                width={384}
                height={428}
                priority
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-xs text-muted">Lagos, Nigeria</p>
          </div>
        </section>

        {/* What I do */}
        <section className="border-t border-line py-16">
          <div className="grid gap-8 md:grid-cols-[200px_1fr]">
            <SectionLabel index="01">What I do</SectionLabel>
            <ul className="flex flex-wrap gap-2">
              {services.map((s) => (
                <li key={s} className="rounded-full border border-line px-4 py-2 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section id="work" className="scroll-mt-8 border-t border-line py-16">
          <div className="grid gap-8 md:grid-cols-[200px_1fr]">
            <SectionLabel index="02">Experience</SectionLabel>
            <ol className="divide-y divide-line">
              {experience.map((e) => (
                <li
                  key={e.role}
                  className="grid gap-1 py-6 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-6"
                >
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">{e.role}</h3>
                    <p className="text-muted">{e.org}</p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{e.note}</p>
                  </div>
                  <p className="text-sm tabular-nums text-muted sm:pt-1">{e.period}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-8 border-t border-line py-16">
          <div className="grid gap-8 md:grid-cols-[200px_1fr]">
            <SectionLabel index="03">About</SectionLabel>
            <div className="space-y-12">
              <p className="font-serif text-3xl leading-snug sm:text-4xl">
                A Mass Communication graduate who enjoys creating engaging content,
                managing social platforms, and helping brands{" "}
                <span className="italic text-muted">talk to people, not at them.</span>
              </p>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Education</h4>
                  <p className="font-medium">B.Sc. Mass Communication</p>
                  <p className="text-muted">Caleb University, Lagos</p>
                  <p className="mt-1 text-sm text-muted">2018 — 2022 · Second Class Honours</p>
                </div>
                <div>
                  <h4 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">
                    Certifications
                  </h4>
                  <ul className="space-y-1">
                    {certifications.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-8 border-t border-line py-20">
          <SectionLabel index="04">Contact</SectionLabel>
          <h2 className="mt-8 font-serif text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-tight">
            Let&apos;s work
            <span className="italic text-muted"> together.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            I&apos;m open to opportunities in social media management, digital marketing and
            public relations. Let&apos;s talk about how I can contribute to your team.
          </p>
          <a
            href="mailto:olabiyidaniel3@gmail.com"
            className="mt-10 inline-block break-all border-b border-ink pb-1 text-xl transition-opacity hover:opacity-60 sm:text-2xl"
          >
            olabiyidaniel3@gmail.com ↗
          </a>

          <dl className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {contact.map((c) => (
              <div key={c.label}>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">{c.label}</dt>
                <dd className="mt-2 break-words text-sm">
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="hover:underline"
                    >
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="flex justify-between border-t border-line py-8 text-xs text-muted">
        <span>© 2026 Daniel Olabiyi</span>
        <a href="#top" className="hover:text-ink">Back to top ↑</a>
      </footer>
    </div>
  );
}
