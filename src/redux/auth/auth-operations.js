import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await api.signup(userData);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await api.login(userData);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
