import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import earthquakesService from './earthquakesService'

const initialState = {
  earthquakes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Sends the request to USGS' API 
export const getTopEarhquakes = createAsyncThunk(
  'earthquakes/getAll',
  async (_, thunkAPI) => {
    try {
      return await earthquakesService.getTopEarhquakes()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//Reducers
export const earthquakesSlice = createSlice({
  name: 'earthquake',
  initialState,
  reducers: {
    resetTopEarthquakes: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopEarhquakes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTopEarhquakes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.earthquakes = action.payload['features']
      })
      .addCase(getTopEarhquakes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetTopEarthquakes } = earthquakesSlice.actions
export default earthquakesSlice.reducer