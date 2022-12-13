/**
 * Copyright (c) 2022, Henrik Geißler
 */
import counterReducer, {
  decrement,
  increment,
  incrementByAmount,
} from './counter.reducer'

describe('counter reducer', () => {
  const initialState = {
    status: 'idle',
    value: 3,
  }
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      status: 'idle',
      value: 0,
    })
  })
  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment())
    expect(actual.value).toEqual(4)
  })
  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement())
    expect(actual.value).toEqual(2)
  })
  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2))
    expect(actual.value).toEqual(5)
  })
})
