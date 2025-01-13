import 'server-only';

import { draftMode } from 'next/headers';
import type { QueryOptions, QueryParams } from 'next-sanity';

import { client } from './client';

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  const { isEnabled } = await draftMode();
  const isDraftMode = isEnabled;
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (isDraftMode && !token) {
    throw new Error(
      'The `SANITY_API_READ_TOKEN` environment variable is required.'
    );
  }

  return client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode &&
      ({
        token: token,
        perspective: 'previewDrafts',
      } satisfies QueryOptions)),

    next: {
      revalidate: isDraftMode || isDevelopment ? 0 : 60,
      tags,
    },
  });
}
