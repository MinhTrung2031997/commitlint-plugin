import parseCommitMessage from '../parseCommitMessage'

describe('commitlintPluginJiraTests', () => {
  const testCommitMessages = {
    multyScopeWipTask: 'test1: [VA-125] put some more mock tests to the UI screen',
  }

  it('should return correct commitTaskIds', () => {
    const res = parseCommitMessage(testCommitMessages.multyScopeWipTask)
    console.log('res:', res)
  })
})
