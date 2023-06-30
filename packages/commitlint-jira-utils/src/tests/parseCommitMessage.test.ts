import parseCommitMessage from '../parseCommitMessage'

describe('commitlintPluginJiraTests', () => {
  //test(SHAR-1234): [VA-125] put some more mock tests to the UI screen
  //test(SHAR-1234): [VA-125] put some more mock tests to the UI screen 0.47
  //test(SHAR-1234): [VA-125] put some more mock tests to the UI screen 47
  const testCommitMessages = {
    // multyScopeWipTask: 'test: [VA-125] put some more mock tests to the UI screen',    
    // multyScopeWipTask: 'test[major]: [VA-125] put some more mock tests to the UI screen',
    multyScopeWipTask: 'feat(SHAR-1234): [VA-125] put some more mock tests to the UI screen 47'
    // multyScopeWipTask: 'feat(SHAR-1234): put some more mock tests to the UI screen 47'
  }

  it('should return correct commitTaskIds', () => {
    const res = parseCommitMessage(testCommitMessages.multyScopeWipTask)
    console.log('res:', res)
  })
})
