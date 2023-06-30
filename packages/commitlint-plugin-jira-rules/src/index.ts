import { commitlintJiraConstants } from 'commitlint-jira-utils-jquery'
import { CommitlintPluginJira } from '../@types'
import jiraCommitMessageSeparatorRuleResolver from './rules/jiraCommitMessageSeparatorRuleResolver'
import jiraCommitTypeCaseRuleResolver from './rules/jiraCommitTypeCaseRuleResolver'
import jiraCommitTicketIdCaseRuleResolver from './rules/jiraCommitTicketIdCaseRuleResolver'
import jiraCommitTitleCaseRuleResolver from './rules/jiraCommitTitleCaseRuleResolver'
import jiraCommitScopeOptionalCaseRuleResolver from './rules/jiraCommitScopeOptionalCaseRuleResolver'

export const commitlintPluginJira: CommitlintPluginJira = {
  rules: {
    // 1
    [commitlintJiraConstants.JIRA_RULES.commitMessageSeparator]:
      jiraCommitMessageSeparatorRuleResolver,

    // 2
    [commitlintJiraConstants.JIRA_RULES.commitScopeOptionalCase]:
      jiraCommitScopeOptionalCaseRuleResolver,

    // 3
    [commitlintJiraConstants.JIRA_RULES.commitTypeCase]: jiraCommitTypeCaseRuleResolver,

    // 4
    [commitlintJiraConstants.JIRA_RULES.commitTicketIdCase]: jiraCommitTicketIdCaseRuleResolver,

    // 5
    [commitlintJiraConstants.JIRA_RULES.commitTitleCase]: jiraCommitTitleCaseRuleResolver,
  },
}

export default commitlintPluginJira
