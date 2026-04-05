const pillars = [
  {
    title: "CRM unificado",
    description:
      "Clientes, contratos, casos e relacionamento no mesmo ecossistema.",
  },
  {
    title: "Operação rastreável",
    description:
      "Timeline de eventos, documentos, protocolos e processos com histórico auditável.",
  },
  {
    title: "Evolução orientada por domínio",
    description:
      "Arquitetura preparada para portais externos, integrações e inteligência operacional.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
            Fundação da plataforma
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Mazzarino Platform
            </h1>
            <p className="text-lg text-muted-foreground">
              Base digital da Mazzarino Corp para CRM, gestão de casos,
              protocolos, processos, documentos, negociações e portais externos.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h2 className="text-lg font-medium">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
