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
    console.log(res);
    
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
  })
})
