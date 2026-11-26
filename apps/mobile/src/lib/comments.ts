import { type Comment } from '@acorn/reddit'

export function createMore(postId: string, cursor: string): Comment {
  return {
    data: {
      count: 0,
      cursor,
      depth: 0,
      id: cursor,
      parentId: postId,
      thread: false,
    },
    type: 'more',
  }
}
