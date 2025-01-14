'use client';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SyntheticEvent } from 'react';
import { AssetType } from '@/types/all-types';
import { imageLoader } from 'next-sanity/image';

type ImageMediaPropsType = {
  asset?: AssetType;
  sizes?: string;
};

export default function ImageMedia(props: ImageMediaPropsType) {
  const { asset, sizes } = props || {};

  const { contextSafe } = useGSAP();

  const defaultFadeIn = contextSafe(
    (e: SyntheticEvent<HTMLImageElement, Event>) => {
      const img = e.currentTarget;

      gsap.to(img, {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.in',
      });
    }
  );
  return (
    <Image
      className="block w-full h-full object-cover max-h-full"
      sizes={sizes ? sizes : '50vw'}
      style={{ opacity: 0 }}
      src={asset?.url ? asset.url : `/images/01.jpg`}
      alt={''}
      width={asset?.width ? asset.width : 1000}
      height={asset?.height ? asset.height : 1000}
      onLoad={defaultFadeIn}
      loader={imageLoader}
    />
  );
}
