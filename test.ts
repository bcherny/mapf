import test from 'ava'
import { mapf } from './'

test('it should map over the given values', async t => {
  const [a, b, c] = await mapf([1, 2, 3], async _ => await double(_))
  t.is(a, 2)
  t.is(b, 4)
  t.is(c, 6)
})

async function double(n: number) {
  return Promise.resolve(n * 2)
}
