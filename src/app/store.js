import { configureStore } from '@reduxjs/toolkit'
import earthquakesReducer from '../features/earthquakes/earthquakesSlice'

export const store = configureStore({
  reducer: {
    earthquakes: earthquakesReducer,
  },
})