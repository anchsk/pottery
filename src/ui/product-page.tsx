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
      className={clsx('bg-blue-300 relative h-svh', {
        'mb-20': !isModal,
      })}
    >
      <div className="block relative h-svh aspect-[0.7] mx-auto py-4">
        <ImageMedia asset={product?.mainImage?.asset} />
      </div>

      {product?.title && (
        <div className="block absolute bottom-4 left-4 leading-[0.75]">
          {product.title}
        </div>
      )}

      {product?.price && (
        <div className="block absolute bottom-4 right-4 leading-[0.75]">
          {euro.format(product.price)}
        </div>
      )}
    </div>
  );
}
