import { groq } from 'next-sanity';

const imageProjection = groq`
    asset->{
        extension,
        url,
        "width": @.metadata.dimensions.width,
        "height": @.metadata.dimensions.height,
        "aspectRatio": @.metadata.dimensions.aspectRatio
      }`;

const productProjection = groq`
    title,
    "slug": slug.current,
    price,
    mainImage {
        ${imageProjection}
    }`;

export const homepageQuery = groq`*[_type == "homepage" && _id == "homepage"][0]{
    hero {
        ${imageProjection}
    },
    products[]->{${productProjection}},
    linkText
  }`;

export const productPageQuery = groq`*[_type == "product" && slug.current == $slug][0]{
    ${productProjection}
}`;

export const productsPageQuery = groq`*[_type == "product"]{
    ${productProjection}
}`