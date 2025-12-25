import { notFound } from 'next/navigation';
import { getIndustryData, getAllIndustrySlugs } from '@/data/industries';
import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';
import IndustryHero from '@/components/industries/IndustryHero';
import IndustryInsights from '@/components/industries/IndustryInsights';
import GrowthFramework from '@/components/industries/GrowthFramework';
import IndustryMetrics from '@/components/industries/IndustryMetrics';
import IndustryServices from '@/components/industries/IndustryServices';
import IndustryCTA from '@/components/industries/IndustryCTA';

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industryData = getIndustryData(slug);

  if (!industryData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <IndustryHero data={industryData.hero} name={industryData.name} />
      <IndustryInsights data={industryData.insights} />
      <GrowthFramework data={industryData.framework} accentColor={industryData.hero.accentColor} />
      <IndustryMetrics data={industryData.metrics} />
      <IndustryServices data={industryData.services} />
      <IndustryCTA industryName={industryData.name} />
      <FooterRebrand />
    </main>
  );
}
