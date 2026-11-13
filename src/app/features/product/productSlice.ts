import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Product } from '../../../types/Product';

export const fetchProduct = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products;
  },
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    entities: [] as Product[],
    loading: 'idle' as 'idle' | 'pending',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.entities = action.payload
      })
  },
});

export default productsSlice.reducer;