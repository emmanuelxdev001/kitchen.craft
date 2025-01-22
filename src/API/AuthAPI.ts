import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const URL = "http://localhost:12330/api";

// Define the shape of account-related data
interface AccountData {
  name?: string;
  email: string;
  password: string;
}

// Generic interface for API responses
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Define specific response types for better type safety
interface User {
  id: string;
  name: string;
  email: string;
  verified: boolean;
}

interface ForgetPasswordResponse {
  emailSent: boolean;
}


export const createAccount = async (data: FormData): Promise<ApiResponse<User>> => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response: AxiosResponse<ApiResponse<User>> = await axios.post(`${URL}/register-account`, data, config);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Create account  error:", error.message);
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};


export const loginAccount = async (data: AccountData): Promise<ApiResponse<User>> => {
  try {
    const response: AxiosResponse<ApiResponse<User>> = await axios.post(`${URL}/login`, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Login  error:", error.message);
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};



export const readUser = async (userID: string): Promise<ApiResponse<User>> => {
  try {
    const response: AxiosResponse<ApiResponse<User>> = await axios.get(`${URL}/get-one-user/${userID}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Read user  error:", error.message);
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};



export const verifyAccount = async (userID: string): Promise<ApiResponse<User>> => {
  try {
    const response: AxiosResponse<ApiResponse<User>> = await axios.get(`${URL}/verify-account/${userID}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Verify account error:", error.message);
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};



export const forgetPassword = async (
  email: string
): Promise<ApiResponse<ForgetPasswordResponse>> => {
  try {
    const response: AxiosResponse<ApiResponse<ForgetPasswordResponse>> = await axios.patch(
      `${URL}/forget-account-password`,
      { email }
    );
    return response.data;
  } catch (error: unknown) {
    // Check if the error is an Axios error
    if (axios.isAxiosError(error)) {
      console.error("Forget password  error:", error.message);
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};



export const resetPassword = async (
  userID: string,
  password: string
): Promise<ApiResponse<User>> => {
  try {
    const response: AxiosResponse<ApiResponse<User>> = await axios.patch(
      `${URL}/reset-account-password/${userID}`,
      { password }
    );
    return response.data;
  } catch (error: unknown) {
    // Check if the error is an Axios error
    if (axios.isAxiosError(error)) {
      console.error("Reset password error:", error.message);
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};

