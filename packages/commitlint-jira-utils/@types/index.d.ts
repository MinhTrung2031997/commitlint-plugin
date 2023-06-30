export interface Rules {
  commitMessageSeparator: string
  commitTypeCase: string
  commitScopeOptionalCase: string
  commitTicketIdCase: string
  commitTitleCase: string
}

export interface TCommitlintJiraConstants {
  JIRA_RULES: Rules
  COMMIT_MESSAGE_SEPARATOR: string
  COMMIT_TASK_STATUS_PATTERN: RegExp
  COMMIT_STATUS_SEPARATORS: {
    start: string
    end: string
  }
  UPPERCASE: string
  LOWERCASE: string
  COMMIT_DESCRIPTION_SEPARATOR: string
}

export type TParseCommitMessage = (
  commitMessage: string,
) => {
  type: string
  rawCommitScope: string
  ticketId: string
  title: string
}

export interface CommitlintJiraUtils {
  parseCommitMessage: TParseCommitMessage
  commitlintJiraConstants: TCommitlintJiraConstants
}

export const commitlintJiraConstants: TCommitlintJiraConstants
export const parseCommitMessage: TParseCommitMessage

declare const commitlintJiraUtils: CommitlintJiraUtils
export default commitlintJiraUtils
