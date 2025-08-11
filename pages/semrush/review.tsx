import Head from "next/head";

export default function SemrushReview() {
  return (
    <div className="space-y-6">
      <Head>
        <title>Semrush Review (2025) — SEO Hunt</title>
        <meta name="description" content="Praktinė Semrush apžvalga: kam tinka, ką daro geriausiai ir kaip išspausti vertę." />
        <meta property="og:image" content="/og-semrush.svg" />
      </Head>

      <h1 className="text-3xl font-bold">Semrush Review (2025)</h1>
      <p className="text-neutral-400 max-w-2xl">
        Žemiau — praktinė apžvalga: ne funkcijų sąrašas, o realūs darbo srautai ir sprendimai, kuriuos Semrush leidžia padaryti greičiau.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card md:col-span-2">
          <h2 className="text-xl font-semibold">Santrauka</h2>
          <ul className="list-disc ml-6 mt-2 text-neutral-300">
            <li>Geriausiai tinka komandai ar freelancer’iui, kuris dirba su keliomis svetainėmis ir reikia „viso ciklo“: tyrimai → turinys → auditai → nuorodos.</li>
            <li>Stiprybės: raktinių žodžių įrankiai, Site Audit, projektų valdymas, integracijos.</li>
            <li>Silpnybės: gali būti brangoka vienai mažai svetainei; kai kurioms užduotims yra pigesnių alternatyvų.</li>
          </ul>
        </div>
        <aside className="card">
          <h3 className="font-semibold">Greitas CTA</h3>
          <a className="btn mt-2" href="https://example.com/your-semrush-affiliate" target="_blank" rel="noopener noreferrer">
            Pirkti Semrush (affiliate)
          </a>
          <a className="btn mt-2" href="https://example.com/your-semrush-affiliate-trial" target="_blank" rel="noopener noreferrer">
            Išbandyti nemokamai (affiliate)
          </a>
          <p className="text-xs text-neutral-500 mt-2">* Jei įsigysite per mūsų nuorodą, gausime komisinį.</p>
        </aside>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Kam tinka?</h2>
        <p className="text-neutral-300 mt-2">
          Agentūroms, freelancer’iams, nišinių projektų kūrėjams, e‑komercijai. Jei reikia vieno įrankio daugeliui užduočių — Semrush vertė didėja.
        </p>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Kainodara (santrauka)</h2>
        <p className="text-neutral-400">Tiksli kainodara ir planų apribojimai gali keistis – pasitikrinkite oficialiame puslapyje.</p>
        <ul className="list-disc ml-6 mt-2 text-neutral-300">
          <li>Entry planai mažesnėms komandoms;</li>
          <li>Aukštesni planai su didesniais limitais ir papildomomis funkcijomis;</li>
          <li>Priklausomai nuo projekto apimties, rinkitės pagal limitus (raktiniai žodžiai, ataskaitos, vartotojai).</li>
        </ul>
        <a className="btn mt-3" href="https://example.com/your-semrush-affiliate#pricing" target="_blank" rel="noopener noreferrer">Peržiūrėti oficialias kainas</a>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Stiprybės / Silpnybės</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <div>
            <h3 className="font-semibold">+ Stiprybės</h3>
            <ul className="list-disc ml-6 text-neutral-300">
              <li>Keyword Magic: greitas klasterizavimo startas</li>
              <li>Site Audit: aiškios problemų grupės</li>
              <li>Projects: patogus daugiafunkcis monitoringo centras</li>
              <li>Backlink Gap: gairės nuorodų „medžioklei“</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">– Silpnybės</h3>
            <ul className="list-disc ml-6 text-neutral-300">
              <li>Kaina vienai mažai svetainei gali būti per didelė</li>
              <li>Ne visoms šalims/nišoms duomenys vienodai gausūs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Alternatyvos</h2>
        <ul className="list-disc ml-6 mt-2 text-neutral-300">
          <li>Ahrefs — stiprus backlink’ams ir SERP analizei</li>
          <li>SE Ranking — biudžetinis all‑in‑one</li>
          <li>Specializuoti įrankiai (Screaming Frog, Surfer, LowFruits) pagal poreikį</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">DUK</h2>
        <ul className="list-disc ml-6 mt-2 text-neutral-300">
          <li>Ar yra trial? — Patikrinkite oficialų puslapį (akcijos keičiasi).</li>
          <li>Ar verta e‑komercijai? — Taip, jei naudojate konkurentų ir raktinių žodžių modulius.</li>
          <li>Ar pakanka vien Semrush? — Dažnai taip, bet technikai/nuorodoms gali reikėti priedų.</li>
        </ul>
      </div>
    </div>
  );
}
