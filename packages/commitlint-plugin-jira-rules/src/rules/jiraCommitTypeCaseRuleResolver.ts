import { parseCommitMessage } from 'commitlint-jira-utils-jquery'
import { TRuleResolver } from '../../@types'

const jiraCommitTypeCaseRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = ['build', 'ci', 'docs', 'fix', 'feat', 'perf', 'refactor', 'style', 'test', 'chore'],
) => {
  const rawCommitMessage = parsed.raw

  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)  
  
  if (!commitMessage.type || !value.includes(commitMessage.type))
    return [false, `type must be one of: [${value.map((type: string) => `${type}`).join(", ")}]`]

  return [true, '']
}
export default jiraCommitTypeCaseRuleResolver
