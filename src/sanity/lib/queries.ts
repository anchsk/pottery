import { groq } from 'next-sanity';

export const homepageQuery = `*[_type == "homepage" && _id == "homepage"][0]{
    products[]->{}
  }`;
