import { ProductType } from '@/types/all-types';
import clsx from 'clsx';
import ImageMedia from './image-media';
import { euro } from '@/utils';

export default function ProductPage(props: {
  product?: ProductType;
  isModal?: boolean;
}) {
  const { product, isModal } = props || {};

  return (
    <div
      className={clsx('relative px-4 md:py-4', {
        'block mb-20 md:h-screen': !isModal,
        'pt-16 md:pt-4 h-full': isModal
      })}
    >
      <div
        className={clsx(
          '_image-container block relative aspect-[0.7] md:h-full mx-auto',
          {
            'h-[70svh]': isModal
          }
        )}
      >
        <ImageMedia asset={product?.mainImage?.asset}/>
      </div>

      {/*       {product?.title && (
        <div className="block absolute bottom-4 left-4 leading-[0.75]">
          {product.title}
        </div>
      )}

      {product?.price && (
        <div className="block absolute bottom-4 right-4 leading-[0.75]">
          {euro.format(product.price)}
        </div>
      )} */}
      <div
        className={clsx(
          'pt-4 md:leading-[0.75] md:pt-0 md:absolute md:bottom-4 md:left-4 md:right-4',
          'flex flex-col items-center md:flex-row md:justify-between',
          
        )}
      >
        <div>Title</div>
        <div>40</div>
      </div>
    </div>
  );
}
