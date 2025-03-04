import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;
const apiClient = axios.create({ baseURL });

//Signin slice
export const signin = createAsyncThunk(
  "auth/signin",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/auth/sigin", loginData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Signup slice
export const signup = createAsyncThunk(
  "auth/signup",
  async (signupData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/auth/sigup", signupData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial State
const initialState = {
  loading: false,
  token: localStorage.getItem("user_token") || "",
  data: {},
  error: [],
  userType: "",
};

// Authentication Slice
const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.token = "";
      state.data = {};
      state.error = [];
      state.userType = "";
    },
    clearError: (state) => {
      state.loading = false;
      state.error = [];
    },
  },
  extraReducers: (builder) => {
    // Register User
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = [];
        state.data = {};
        localStorage.removeItem("user_token");
        state.token = ""; // Clear the token
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        localStorage.setItem("user_token", action.payload.token);
        state.token = action.payload.token;
        state.userType = action.payload.userType;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

    // Handle Login
    builder
      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = [];
        state.data = {};
        state.userType = "";
        localStorage.removeItem("user_token");
        state.token = ""; // Clear the token
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        localStorage.setItem("user_token", action.payload.token);
        state.userType = action.payload.userType;
        state.data = action.payload;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { clearState, clearError } = authSlice.actions;
export default authSlice.reducer;
