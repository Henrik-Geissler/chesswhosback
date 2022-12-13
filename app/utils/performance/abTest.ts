import { oneOf } from '../rng/rng'

const DEFAULT_CIRCLES = 10000000
const PREFIX = '#'
const STYLE = 'background:#222;color:'
export const abTest = (
  f1: () => any,
  f2: () => any = () => {},
  circles: number = DEFAULT_CIRCLES
): void => {
  console.log('\n\n\n---   ---   A/B-Test   ---   ---')
  const literal = {
    A: { f: f1, color: '#bd5', icon: '📗', time: 0 },
    B: { f: f2, color: '#5bd', icon: '📘', time: 0 },
  }
  oneOf(['ABBA', 'BAAB'])
    .split('')
    .map(e => {
      const name = PREFIX + e + literal[e].icon
      console.time(name)
      const start = performance.now()
      for (let i = 0; i < circles; i++) literal[e].f()
      literal[e].time += performance.now() - start
      console.timeEnd(name)
    })
  Object.entries(literal)
    .sort(([_a, { time: a }], [_b, { time: b }]) => (a > b ? 1 : -1))
    .map(([k, v]) => {
      console.log(
        '%c' +
          PREFIX +
          k +
          ':  ' +
          '%c' +
          Math.floor(
            (10000 * v.time) /
              Object.values(literal).find(({ time }) => time != v.time).time
          ) /
            100 +
          '%',
        'font-size:16px;' + STYLE + v.color,
        'font-size:16px;',
        v.f
      )
    })
}
