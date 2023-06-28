import jiraCommitTitleCaseRuleResolver from '../jiraCommitTitleCaseRuleResolver'

describe('jiraCommitTypeCaseRuleResolver', () => {
  it('should return a error response if commitMessageSeparator not match provided separator', () => {
    const parsed = {
      raw: '',
    }
    expect(jiraCommitTitleCaseRuleResolver(parsed)[0]).toEqual(false)
  })

  it('should return a error response if the title does not match rules', () => {
    expect(
      jiraCommitTitleCaseRuleResolver({
        raw:
          'test: [VA-25] put some more mock tests to the ui screen put some more mock tests to the ui screen',
      })[0],
    ).toEqual(false)
  })

  it('should return true if the title match rules', () => {
    expect(
      jiraCommitTitleCaseRuleResolver({
        raw: 'test: [VA-125] put some more mock tests to the UI-64 screen',
      })[0],
    ).toEqual(true)
  })
})
