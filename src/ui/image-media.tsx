'use client';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SyntheticEvent } from 'react';

type ImageMediaPropsType = {
  imageSrc?: string;
  sizes?: string;
};

export default function ImageMedia(props: ImageMediaPropsType) {
  const { imageSrc, sizes } = props || {};
  const { contextSafe } = useGSAP();

  const defaultFadeIn = contextSafe(
    (e: SyntheticEvent<HTMLImageElement, Event>) => {
      const img = e.currentTarget;

      gsap.to(img, {
        opacity: 1,
        duration: 0.5,
        // delay: Math.random(),
        ease: 'power4.in',
      });
    }
  );
  return (
    <Image
      className="block w-full h-full object-cover max-h-full"
      sizes={sizes ? sizes : '50vw'}
      style={{ opacity: 0 }}
      src={imageSrc ? imageSrc : `/images/01.jpg`}
      alt={''}
      width={1200}
      height={900}
      onLoad={defaultFadeIn}
    />
  );
}
