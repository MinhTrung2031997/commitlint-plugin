import { commitlintJiraConstants } from 'commitlint-jira-utils-jquery'
import { CommitlintConfigJira } from '../@types'

export const commitlintConfigJira: CommitlintConfigJira = {
  rules: {
    [commitlintJiraConstants.JIRA_RULES.commitMessageSeparator]: [
      2,
      'always',
      commitlintJiraConstants.COMMIT_MESSAGE_SEPARATOR,
    ],

    [commitlintJiraConstants.JIRA_RULES.commitTypeCase]: [
      2,
      'always',
      ['build', 'ci', 'docs', 'fix', 'feat', 'perf', 'refactor', 'style', 'test', 'chore'],
    ],

    [commitlintJiraConstants.JIRA_RULES.commitTicketIdCase]: [2, 'always'],

    [commitlintJiraConstants.JIRA_RULES.commitTitleCase]: [2, 'always'],
  },
}

export default commitlintConfigJira
