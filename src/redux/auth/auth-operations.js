import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../';

const signup = createAsyncThunk(
  'auth/signup',
  async(data, { rejectWithValue })
);
