import { parseCommitMessage } from 'commitlint-jira-utils-jquery'
import { TRuleResolver } from '../../@types'

const jiraCommitTitleCaseRuleResolver: TRuleResolver = parsed => {
  const rawCommitMessage = parsed.raw

  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const { title } = parseCommitMessage(rawCommitMessage)

  if (!/^.{10,60}$/.test(title) || !/[^.]$/.test(title)) {
    return [
      false,
      `title must be at least 10-character and max 60-character long, no capitalization, no ending dot`,
    ]
  }
  return [true, '']
}
export default jiraCommitTitleCaseRuleResolver
