import { type Comment } from '@acorn/reddit'

export function getParentCommentIds(
  comments: Array<Comment>,
  commentId: string,
): Array<string> {
  const comment = comments.find(
    (item) => item.type !== 'more' && item.data.id === commentId,
  )

  if (!comment?.data.parentId) {
    return []
  }

  return [
    comment.data.parentId,
    ...getParentCommentIds(comments, comment.data.parentId),
  ]
}

export function isHidden(comments: Array<Comment>, commentId: string) {
  const comment = comments.find((item) => item.data.id === commentId)

  if (!comment?.data.parentId) {
    return false
  }

  const parent = comments.find((item) => item.data.id === comment.data.parentId)

  if (parent && parent.type !== 'more' && parent.data.collapsed) {
    return true
  }

  return isHidden(comments, comment.data.parentId)
}
