import jiraCommitTicketIdCaseRuleResolver from '../jiraCommitTicketIdCaseRuleResolver'

describe('jiraCommitTicketIdCaseRuleResolver', () => {
  it('should return a error response if the commit message is empty', () => {
    const parsed = {
      raw: '',
    }
    const res = jiraCommitTicketIdCaseRuleResolver(parsed)
    expect(res[0]).toEqual(false)
  })

  it('should return a error response if the ticketId does not match rules', () => {
    expect(
      jiraCommitTicketIdCaseRuleResolver({
        raw: 'test: [Va-125] put some more mock tests to the UI screen',
      })[0],
    ).toEqual(false)
    expect(
      jiraCommitTicketIdCaseRuleResolver({
        raw: 'test: [VA-a25] put some more mock tests to the UI screen',
      })[0],
    ).toEqual(false)
  })

  it('should return true if the ticket id match rules', () => {
    expect(
      jiraCommitTicketIdCaseRuleResolver({
        raw: 'feat(VA-123): [VA-125] put some more mock tests to the UI screen',
      })[0],
    ).toEqual(true)

    expect(
      jiraCommitTicketIdCaseRuleResolver({
        raw: 'test(VA-123): put some more mock tests to the UI screen',
      })[0],
    ).toEqual(true)

    expect(
      jiraCommitTicketIdCaseRuleResolver({
        raw: 'test(VA-123): [VA-125] put some more mock tests to the UI screen',
      })[0],
    ).toEqual(true)
  })

  it("should return error if the ticket id doesn't match rules", () => {
    expect(
      jiraCommitTicketIdCaseRuleResolver({
        raw: 'fix(VA-123): put some more mock tests to the UI screen',
      })[0],
    ).toEqual(false)

    expect(
      jiraCommitTicketIdCaseRuleResolver({
        raw: 'feat(VA-123): put some more mock tests to the UI screen',
      })[0],
    ).toEqual(false)

    expect(
      jiraCommitTicketIdCaseRuleResolver({
        raw: 'build(VA-123): [Va-125] put some more mock tests to the UI screen',
      })[0],
    ).toEqual(false)
  })
})
