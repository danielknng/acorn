import {
  type FeedsQueryData,
  type FeedsQueryKey,
} from '~/hooks/queries/communities/feeds'

import { queryClient } from './query'

export function getFeedPath(accountId: string | undefined, id: string) {
  const feeds = queryClient.getQueryData<FeedsQueryData>([
    'feeds',
    {
      accountId,
    },
  ] satisfies FeedsQueryKey)

  return (
    feeds?.find((item) => item.id === id)?.path ?? `/user/${accountId}/m/${id}/`
  )
}
