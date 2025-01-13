export type AssetType = {
  width: number;
  height: number;
  aspectRatio: number;
  extension: string;
  url: string;
};

export type ProductType = {
  title?: string;
  slug?: string;
  price?: number;
  mainImage: {
    asset?: AssetType;
  };
};
export type HeroType = {
  asset?: AssetType;
};
export type HomepageType = {
  hero?: HeroType;
  products?: ProductType[];
  linkText?: string;
};

export type ProductsPageType = ProductType[]