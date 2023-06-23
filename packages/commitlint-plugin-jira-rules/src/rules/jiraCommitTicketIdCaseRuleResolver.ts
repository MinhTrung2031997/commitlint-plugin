import { parseCommitMessage } from 'commitlint-jira-utils-jquery'
import { TRuleResolver } from '../../@types'

const jiraCommitTicketIdCaseRuleResolver: TRuleResolver = parsed => {
  const rawCommitMessage = parsed.raw

  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  if (!commitMessage.ticketId)
    return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]

  const ticketIdSeparators = commitMessage.ticketId.split('-')

  if (ticketIdSeparators.length !== 2)
    return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]

  if (!/^[A-Z]+$/.test(ticketIdSeparators[0])) {
    return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]
  }

  if (!/^[0-9]+$/.test(ticketIdSeparators[1])) {
    return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]
  }

  return [true, '']
}
export default jiraCommitTicketIdCaseRuleResolver
