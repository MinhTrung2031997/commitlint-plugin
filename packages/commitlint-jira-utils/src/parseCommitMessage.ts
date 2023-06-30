import { TParseCommitMessage } from '../@types'
import {
  COMMIT_MESSAGE_SEPARATOR,
  COMMIT_TASK_STATUS_PATTERN,
  COMMIT_STATUS_SEPARATORS,
  COMMIT_DESCRIPTION_SEPARATOR,
  COMMIT_TASK_STATUS_SQUARE_PATTERN,
} from './commitlintJiraConstants'

const parseCommitMessage: TParseCommitMessage = rawCommitMessage => {
  const commitMessage = rawCommitMessage
    .split(COMMIT_DESCRIPTION_SEPARATOR)
    .filter(commitMessageSeparatedPart => commitMessageSeparatedPart)[0]

  const commitMessageParts = commitMessage.split(COMMIT_MESSAGE_SEPARATOR)

  const rawCommitHeader = commitMessageParts.length >= 2 ? commitMessageParts[0] : ''

  const type = rawCommitHeader
    .replace(
      rawCommitHeader.includes('(' && ')')
        ? COMMIT_TASK_STATUS_PATTERN
        : COMMIT_TASK_STATUS_SQUARE_PATTERN,
      '',
    )
    .trim()

  const rawCommitScope = rawCommitHeader.replace(type, '')

  const commitFooter =
    commitMessageParts.length > 2
      ? commitMessageParts
          .filter((_value, index) => index > 0)
          .join(COMMIT_MESSAGE_SEPARATOR)
          .trim()
      : commitMessageParts[commitMessageParts.length - 1].trim()

  const ticketId = commitFooter.includes('[' && ']')
    ? commitFooter.split(']')[0].replace('[', '').trim()
    : ''

  const title = commitFooter.replace(COMMIT_TASK_STATUS_SQUARE_PATTERN, '').trim()

  return {
    type,
    rawCommitScope,
    ticketId,
    title,
  }
}

export default parseCommitMessage
