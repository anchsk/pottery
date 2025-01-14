import { SanityDocument, SanityReference } from 'next-sanity';
import { ReferenceFilterResolverContext } from 'sanity';

export async function filterAlreadyReferenced(
  props: ReferenceFilterResolverContext
) {
  const { document, parentPath } = props;
  let pathToRefs: SanityDocument = document;
  for (let i = 0; i < parentPath.length; i++) {
    pathToRefs = pathToRefs[parentPath[i] as string];
  }
  const refs = pathToRefs
    ?.map((p: SanityReference) => p._ref)
    .filter((r: SanityReference) => Boolean(r));
  const draftIds = refs.map((r: SanityReference) => `drafts.${r}`);
  const allRefs = refs.concat(draftIds);
  return {
    filter: '!(_id in $refs)',
    params: { refs: allRefs },
  };
}
