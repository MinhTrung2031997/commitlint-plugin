import jiraCommitScopeOptionalCaseRuleResolver from '../jiraCommitScopeOptionalCaseRuleResolver'

describe('jiraCommitScopeOptionalCaseRuleResolver', () => {
  it('should return a error response if the commit message is empty', () => {
    const parsed = {
      raw: '',
    }
    const res = jiraCommitScopeOptionalCaseRuleResolver(parsed)
    expect(res[0]).toEqual(false)
  })

  it('should return a true response if the scope is empty and square brackets', () => {
    expect(
      jiraCommitScopeOptionalCaseRuleResolver({
        raw: 'test: [Va-125] put some more mock tests to the UI screen',
      })[0],
    ).toEqual(true)

    expect(
      jiraCommitScopeOptionalCaseRuleResolver({
        raw: 'test[feat]: [Va-125] put some more mock tests to the UI screen',
      })[0],
    ).toEqual(true)
  })

  it("should return error response if the scope doesn't match rules", () => {
    expect(
      jiraCommitScopeOptionalCaseRuleResolver({
        raw: 'test(): [VA-125] put some more mock tests to the UI screen',
      })[0],
    ).toEqual(false)

    expect(
      jiraCommitScopeOptionalCaseRuleResolver({
        raw: 'test(SHAR-123A): [VA-125] put some more mock tests to the UI screen',
      })[0],
    ).toEqual(false)
    expect(
        jiraCommitScopeOptionalCaseRuleResolver({
          raw: 'test(SHar-123): [VA-125] put some more mock tests to the UI screen',
        })[0],
      ).toEqual(false)
  })

  it("should return true response if the scope match bracket rule", () => {
    expect(
      jiraCommitScopeOptionalCaseRuleResolver({
        raw: 'test(SHAR-1155): [VA-125] put some more mock tests to the UI screen',
      })[0],
    ).toEqual(true)
  })
})
