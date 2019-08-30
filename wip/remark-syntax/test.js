const fs = require('fs')
const remark = require('remark')

const plugin = require('.')

const doc = fs.readFileSync('fixture.md', 'utf8')

test('adds BREAKING', () => {
  const result = remark()
    .use(plugin)
    .processSync(doc)

  expect(result.contents).toContain('# BREAKING Hello, world!')
})
