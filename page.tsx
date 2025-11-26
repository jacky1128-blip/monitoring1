import { AppShell } from "@/components/layout/AppShell";
import { SearchHero } from "@/components/sections/SearchHero";
import { getGlossaryByTerms } from "@/data/glossary";
import { getMarketSnapshot } from "@/data/mock-market";
import { PriceSummary } from "@/components/sections/PriceSummary";
import { PriceChart } from "@/components/sections/PriceChart";
import { CommunityPanel } from "@/components/sections/CommunityPanel";
import { NewsList } from "@/components/sections/NewsList";
import { MarketVoices } from "@/components/sections/MarketVoices";

export default async function Home() {
  const snapshot = await getMarketSnapshot();
  const glossary = getGlossaryByTerms(snapshot.featuredStock.terms);

  return (
    <AppShell>
      <SearchHero placeholders={snapshot.searchPlaceholders} />
      <PriceSummary stock={snapshot.featuredStock} glossary={glossary} />
      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <PriceChart data={snapshot.chart} />
        <CommunityPanel posts={snapshot.community} />
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <NewsList news={snapshot.news} />
        <MarketVoices voices={snapshot.voices} />
      </section>
    </AppShell>
  );
}
