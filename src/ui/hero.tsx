import Header from './header';
import ImageMedia from './image-media';

export default function Hero() {
  return (
    <div className="_hero w-full h-svh flex flex-col mb-28">
      <div className="grow basis-0 flex flex-col overflow-auto">
        <ImageMedia imageSrc="/images/hero.jpg" sizes="100vw" />
      </div>
      <Header />
    </div>
  );
}
