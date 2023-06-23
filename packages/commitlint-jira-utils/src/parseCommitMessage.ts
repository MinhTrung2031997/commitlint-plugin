import { TParseCommitMessage } from '../@types'
import {
  COMMIT_MESSAGE_SEPARATOR,
  COMMIT_TASK_STATUS_PATTERN,
  COMMIT_STATUS_SEPARATORS,
  COMMIT_DESCRIPTION_SEPARATOR,
} from './commitlintJiraConstants'

const parseCommitMessage: TParseCommitMessage = rawCommitMessage => {
  const commitMessage = rawCommitMessage
    .split(COMMIT_DESCRIPTION_SEPARATOR)
    .filter(commitMessageSeparatedPart => commitMessageSeparatedPart)[0]

  const commitMessageParts = commitMessage.split(COMMIT_MESSAGE_SEPARATOR)

  const rawCommitHeader = commitMessageParts.length >= 2 ? commitMessageParts[0] : ''

  const type = rawCommitHeader.replace(COMMIT_TASK_STATUS_PATTERN, '').trim()

  const commitFooter =
    commitMessageParts.length > 2
      ? commitMessageParts
          .filter((_value, index) => index > 0)
          .join(COMMIT_MESSAGE_SEPARATOR)
          .trim()
      : commitMessageParts[commitMessageParts.length - 1].trim()

  const rawCommitScope = rawCommitHeader.split(COMMIT_STATUS_SEPARATORS.start)

  const scope =
    rawCommitScope.length >= 2
      ? rawCommitScope[rawCommitScope.length - 1].replace(COMMIT_STATUS_SEPARATORS.end, '').trim()
      : ''

  const rawCommitTicketId = commitFooter.split(COMMIT_STATUS_SEPARATORS.end)

  const ticketId = rawCommitTicketId.length
    ? rawCommitTicketId[0].replace(COMMIT_STATUS_SEPARATORS.start, '').trim()
    : ''

  const title = commitFooter.replace(COMMIT_TASK_STATUS_PATTERN, '').trim()

  return {
    type,
    scope,
    ticketId,
    title,
  }
}

export default parseCommitMessage
