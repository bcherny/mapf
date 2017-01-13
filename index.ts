/**
 * Better than `Promise.all`.
 *
 * `const [a, b, c] = await mapf([1, 2, 3], async _ => await foo(_) )`
 */
export function mapf<T, U, V>(array: T[], cb: (this: V, t: T) => Promise<U>, thisArg?: V): Promise<U[]> {
  return Promise.all<U>(array.map(cb, thisArg))
}
