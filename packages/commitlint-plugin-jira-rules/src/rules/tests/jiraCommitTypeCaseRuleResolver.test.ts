import jiraCommitTypeCaseRuleResolver from '../jiraCommitTypeCaseRuleResolver'

describe('jiraCommitTypeCaseRuleResolver', () => {
  it('should return a error response if the commit message is empty', () => {
    const parsed = {
      raw: '',
    }
    const res = jiraCommitTypeCaseRuleResolver(parsed)
    expect(res[0]).toEqual(false)
  })

  it('should return a error response if type does not match with rule', () => {
    const parsed = {
      raw: 'test1: [VA-125] put some more mock tests to the UI screen',
    }
    const res = jiraCommitTypeCaseRuleResolver(parsed, undefined, [
      'build',
      'ci',
      'docs',
      'fix',
      'feat',
      'perf',
      'refactor',
      'style',
      'test',
      'chore',
    ])
    
    expect(res[0]).toEqual(false)
  })

  it('should return a true if type match with rule', () => {
    const parsed = {
      raw: 'test: [VA-125] put some more mock tests to the UI screen',
    }
    const res = jiraCommitTypeCaseRuleResolver(parsed, undefined, [
      'build',
      'ci',
      'docs',
      'fix',
      'feat',
      'perf',
      'refactor',
      'style',
      'test',
      'chore',
    ])
    expect(res[0]).toEqual(true)

    const parsed2 = {
      raw: 'test[major]: [VA-125] put some more mock tests to the UI screen',
    }
    const res2 = jiraCommitTypeCaseRuleResolver(parsed2, undefined, [
      'build',
      'ci',
      'docs',
      'fix',
      'feat',
      'perf',
      'refactor',
      'style',
      'test',
      'chore',
    ])
    expect(res2[0]).toEqual(true)


    const parsed3 = {
      raw: 'test(SHAR-1155): [VA-125] put some more mock tests to the UI screen',
    }
    const res3 = jiraCommitTypeCaseRuleResolver(parsed3, undefined, [
      'build',
      'ci',
      'docs',
      'fix',
      'feat',
      'perf',
      'refactor',
      'style',
      'test',
      'chore',
    ])
    expect(res3[0]).toEqual(true)
  })
})
