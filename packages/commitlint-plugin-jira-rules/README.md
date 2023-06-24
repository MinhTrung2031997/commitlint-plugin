<div align="center">
  <img width="300" height="200"
    src="https://raw.githubusercontent.com/Gherciu/commitlint-jira/master/logo.png">
  <h1>commitlint-plugin-shr-jira</h1>
  <p>A plugin that implement all jira commits messages style rules and validate commit messages. Part of <a href="https://github.com/MinhTrung2031997/commitlint-plugin">commitlint-plugin</a> monorepo.</p>
</div>

For Tips and [Advanced Usage](https://javascript.plainenglish.io/how-to-write-correct-jira-commit-messages-d9910f332273) you can read this [Blog Post](https://javascript.plainenglish.io/how-to-write-correct-jira-commit-messages-d9910f332273)

## Getting started.

##### Install dependencies

```bash
npm install --save-dev @commitlint/cli commitlint-config-jira-jquery commitlint-plugin-shr-jira
```

- [commitlint-config-jira-jquery](https://github.com/MinhTrung2031997/commitlint-plugin/tree/master/packages/commitlint-config-jira) - is a **recomended** config who contain preconfigured rules for jira commits messages style. See all rules in description below
- [commitlint-plugin-shr-jira](https://github.com/MinhTrung2031997/commitlint-plugin/tree/master/packages/commitlint-plugin-jira-rules) - is a plugin that implement all jira commits messages style rules and validate commit messages

##### Configure commitlint to use jira commits messages style config

```js
// commitlint.config.js || commitlintrc.js
module.exports = {
  plugins: ['commitlint-plugin-shr-jira'],
  extends: ['jira-jquery'],
}
```

##### To lint commits before they are created you can use Husky's 'commit-msg' hook

```json
// package.json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## Rules
```bash
// You must follow this rule
<type>[<scope>(optional)]: [<ticket-id>(uppercase-number)] <title>
[optional body]
[optional footer(s)]
```
Notes: The attributes must be based on this below:
- <span style="color: green">type</span>: build, ci, docs, fix, feat, perf, refactor, style, test, chore
- <span style="color: green">scope</span>: fatal, major, minor, ui, http, compiler, etc.
- <span style="color: green">ticket_id</span>: Jira’s ticket ID
- <span style="color: green">title</span>: meaningful, imperative mood, 60-character long, no capitalization, no ending dot (.)

## Examples

```bash
// ❌ Bad commit messages
git commit -m"My commit message body"
git commit -m":My commit message body"
git commit -m"feat: My commit message body"
git commit -m"feat: [Va-123] my commit message body"
git commit -m"feat: [VA-123h] my commit message body"
git commit -m"feat: [VA-123] my commit message body."
// ✅ Good commit messages
git commit -m"feat[major]: [SHRA-3331] add the commitlint plugin"
git commit -m"feat: [SHRA-3331] add the commitlint plugin"
```






