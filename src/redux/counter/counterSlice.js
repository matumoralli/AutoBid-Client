import { createSlice } from '@reduxjs/toolkit'
//! ESTE ES UN EJEMPLO DE CÓMO FUNCIONA UN ARCHIVO EN REDUX SÍNCRONO. ESTE ARCHIVO INCLUYE TODA LA LÓGICA DE ACTION CREATORS Y REDUCERS DE UNA ENTIDAD.

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

//* Action creators are generated for each case reducer function. Import these actions to use in your component.
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer