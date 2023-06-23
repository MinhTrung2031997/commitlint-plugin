import { commitlintJiraConstants } from 'commitlint-jira-utils-jquery'

import { TRuleResolver } from '../../@types'

const jiraCommitMessageSeparatorRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = commitlintJiraConstants.COMMIT_MESSAGE_SEPARATOR,
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  let isRuleValid = false

  const findedMatchingSeparators = rawCommitMessage.match(new RegExp(`${value}`, 'ig'))

  // check only first matching separator
  if (findedMatchingSeparators && findedMatchingSeparators[0]) isRuleValid = true

  return [
    isRuleValid,
    `Commit message parts must be separated with <type>[<scope>(optional)]: [<ticket-id>(uppercase-number)] <title>`,
  ]
}
export default jiraCommitMessageSeparatorRuleResolver
