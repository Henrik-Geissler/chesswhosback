/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchCount } from './counterAPI'

const initialState = {
  status: 'idle',
  value: 0,
}

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount)
    return response.data
  }
)

export const counterSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
  },

  initialState,

  name: 'counter',

  reducers: {
    decrement: state => {
      state.value -= 1
    },
    increment: state => {
      state.value += 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { decrement, increment, incrementByAmount } = counterSlice.actions

export const selectCount = state => state.counter.value

export const incrementIfOdd = amount => (dispatch, getState) => {
  const currentValue = selectCount(getState())
  if (currentValue % 2 === 1) dispatch(incrementByAmount(amount))
}

export default counterSlice.reducer
