import { HeroType } from '@/types/all-types';
import Header from './header';
import ImageMedia from './image-media';

export default function Hero({ hero }: { hero?: HeroType }) {
  if (!hero) return;
  return (
    <div className="_hero w-full h-svh flex flex-col mb-28">
      <div className="grow basis-0 flex flex-col overflow-auto">
        <ImageMedia asset={hero?.asset} sizes="100vw" />
      </div>
      <Header />
    </div>
  );
}
