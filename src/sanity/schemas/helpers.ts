import { SanityDocument } from "next-sanity";
import { ReferenceFilterResolverContext } from "sanity";

export async function filterAlreadyReferenced(props: ReferenceFilterResolverContext) {
    const { document, parentPath } = props;
    let pathToRefs = document;
    for (let i = 0; i < parentPath.length; i++) {
      //pathToRefs = pathToRefs[parentPath[i] as string] as SanityDocument
      //@ts-ignore
      pathToRefs = pathToRefs[parentPath[i]]
    }
  
    //@ts-ignore
    const refs = pathToRefs?.map((p) => p._ref).filter((r) => Boolean(r));
    //@ts-ignore
    const draftIds = refs.map((r) => `drafts.${r}`);
    const allRefs = refs.concat(draftIds);
    return {
      filter: "!(_id in $refs)",
      params: { refs: allRefs },
    };
  }
  