import { homepageQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanity.fetch';
import { HomepageType } from '@/types/all-types';
import Homepage from '@/ui/homepage';

export default async function Home() {
  const homepageData = await sanityFetch<HomepageType>({
    query: homepageQuery,
  });
  if (!homepageData) return;

  return (
    <div className="w-full">
      <Homepage homepageData={homepageData} />
    </div>
  );
}
