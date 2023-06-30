import { parseCommitMessage } from 'commitlint-jira-utils-jquery'
import { TRuleResolver } from '../../@types'

const jiraCommitTicketIdCaseRuleResolver: TRuleResolver = parsed => {
  const rawCommitMessage = parsed.raw

  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)
  
  const { type, ticketId } = commitMessage
  
  if (!type) return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]

  if (['fix', 'feat'].includes(type)) {
    const ticketIdSeparators = ticketId.split('-')

    if (ticketIdSeparators.length !== 2)
      return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]

    if (!/^[A-Z]+$/.test(ticketIdSeparators[0])) {
      return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]
    }

    if (!/^[0-9]+$/.test(ticketIdSeparators[1])) {
      return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]
    }
  } else {
    if (!ticketId) return [true, '']

    const ticketIdSeparators = ticketId.split('-')

    if (ticketIdSeparators.length !== 2)
      return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]

    if (!/^[A-Z]+$/.test(ticketIdSeparators[0])) {
      return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]
    }

    if (!/^[0-9]+$/.test(ticketIdSeparators[1])) {
      return [false, `ticket-id must be format: [ticket-id(uppercase-number)]`]
    }
  }

  return [true, '']
}
export default jiraCommitTicketIdCaseRuleResolver
