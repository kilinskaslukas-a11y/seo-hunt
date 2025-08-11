export default function SemrushLanding() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Semrush: pilnas gidas</h1>
      <p className="text-neutral-400 max-w-2xl">
        Kaip naudoti Semrush raktinių žodžių tyrimui, techniniam auditui, nuorodų analizei ir turinio strategijai.
      </p>
      <div className="card">
        <h2 className="text-xl font-semibold">Greita santrauka</h2>
        <ul className="list-disc ml-6 mt-2 text-neutral-300">
          <li>Keyword Magic + SERP analizė</li>
          <li>Topic Research + SEO Writing Assistant</li>
          <li>Site Audit: Issues → Fixes</li>
          <li>Backlink Gap + Link Building</li>
        </ul>
      </div>
      <div id="pricing" className="card">
        <h2 className="text-xl font-semibold">Kainos ir planai</h2>
        <p className="text-neutral-400 mt-1">Spauskite, kad pereitumėte į oficialų puslapį:</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="btn" href="https://example.com/your-semrush-affiliate" target="_blank" rel="noopener noreferrer">
            Pirkti Semrush (affiliate)
          </a>
          <a className="btn" href="https://example.com/your-semrush-affiliate-trial" target="_blank" rel="noopener noreferrer">
            Išbandyti nemokamai (affiliate)
          </a>
        </div>
        <p className="text-xs text-neutral-500 mt-2">
          * Affiliate nuorodos — jei įsigysite, gausime komisinį be papildomų kaštų jums.
        </p>
      </div>
    </div>
  );
}
