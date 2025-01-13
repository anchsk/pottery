import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'
import { ImageLoader } from 'next/image';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

export const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return builder
    ?.image(src)
    .width(width)
    .quality(quality || 80)
    .format('webp')
    .fit('max')
    .url();
};