import { Obj } from './Obj'
import { objLiteral } from './ObjFactory'

const cases = Object.values(objLiteral)

describe('Obj creation', () => {
  test.each(cases)('%p equals new should differ', obj => {
    const a = obj.gen()
    const b = obj.gen()
    expect(a.equals(b)).toBeFalsy()
  })
  test.each(cases)('%p equals same should same', obj => {
    const a = obj.gen()
    const b = a
    expect(a.equals(b)).toBeTruthy()
  })
  test.each(cases)('%p equalsAndTypeCheck new should differ', obj => {
    const a = obj.gen()
    const b = obj.gen()
    expect(a.equalsAndTypeCheck(b)).toBeFalsy()
  })
  test.each(cases)('%p equalsAndTypeCheck same should same', obj => {
    const a = obj.gen()
    const b = a
    expect(a.equalsAndTypeCheck(b)).toBeTruthy()
  })
  test.each(cases)('%p copy same should same', obj => {
    const a = obj.gen()
    const b = a.copy()
    expect(a.equalsAndTypeCheck(b)).toBeTruthy()
  })
})
