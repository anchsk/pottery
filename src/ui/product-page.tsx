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
        'pt-16 md:pt-4 h-full px-4 md:px0': isModal
      })}
    >
      <div
        className={clsx(
          '_image-container block relative aspect-[0.7] md:h-full mx-auto',
          {
            /* 'w-full h-[unset] md:w-[unset] ': isModal */ // <-- image on mobile fits the width but might not fit the small screen
            'max-h-[70svh] w-auto h-[unset] md:max-h-[unset] md:w-[unset] ': isModal
          }
        )}
      >
        <ImageMedia asset={product?.mainImage?.asset} sizes='(max-width: 768px) 100vw, 50vw'/>
      </div>

      <div
        className={clsx(
          'pt-4 md:leading-[0.75] md:pt-0 md:absolute md:bottom-4 md:left-4 md:right-4',
          'flex flex-col items-start md:flex-row md:justify-between',
        )}
      >
        {product?.title && <h1>{product.title}</h1>}
        {product?.price && <div>{euro.format(product.price)}</div>}
      </div>
    </div>
  );
}
