import { commitlintJiraConstants } from 'commitlint-jira-utils-jquery'
import { CommitlintPluginJira } from '../@types'
import jiraCommitMessageSeparatorRuleResolver from './rules/jiraCommitMessageSeparatorRuleResolver'
import jiraCommitTypeCaseRuleResolver from './rules/jiraCommitTypeCaseRuleResolver'
import jiraCommitTicketIdCaseRuleResolver from './rules/jiraCommitTicketIdCaseRuleResolver'
import jiraCommitTitleCaseRuleResolver from './rules/jiraCommitTitleCaseRuleResolver'

export const commitlintPluginJira: CommitlintPluginJira = {
  rules: {
    // 1
    [commitlintJiraConstants.JIRA_RULES
      .commitMessageSeparator]: jiraCommitMessageSeparatorRuleResolver,

    // 2
    [commitlintJiraConstants.JIRA_RULES.commitTypeCase]: jiraCommitTypeCaseRuleResolver,

    // 3
    [commitlintJiraConstants.JIRA_RULES.commitTicketIdCase]: jiraCommitTicketIdCaseRuleResolver,

    // 4
    [commitlintJiraConstants.JIRA_RULES.commitTitleCase]: jiraCommitTitleCaseRuleResolver,
  },
}

export default commitlintPluginJira
