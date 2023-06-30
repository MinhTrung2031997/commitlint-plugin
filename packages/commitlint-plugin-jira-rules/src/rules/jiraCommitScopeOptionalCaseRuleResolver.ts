import { parseCommitMessage, commitlintJiraConstants } from 'commitlint-jira-utils-jquery'
import { TRuleResolver } from '../../@types'

const jiraCommitScopeOptionalCaseRuleResolver: TRuleResolver = parsed => {
  const rawCommitMessage = parsed.raw

  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  if (!commitMessage.rawCommitScope) return [true, '']

  const { rawCommitScope } = commitMessage

  if (rawCommitScope.match(/\[.*\]/gi)) {
    return [true, '']
  }

  if (rawCommitScope.match(/\(.*\)/gi)) {
    const scope = rawCommitScope.replace('(', '').replace(')', '').trim()

    const scopeSeparators = scope.split('-')

    if (scopeSeparators.length !== 2)
      return [false, `scope must be format: [ticket-id(uppercase-number)]`]

    if (!/^[A-Z]+$/.test(scopeSeparators[0])) {
      return [false, `scope must be format: [ticket-id(uppercase-number)]`]
    }

    if (!/^[0-9]+$/.test(scopeSeparators[1])) {
      return [false, `scope must be format: [ticket-id(uppercase-number)]`]
    }
  }

  return [true, '']
}
export default jiraCommitScopeOptionalCaseRuleResolver
