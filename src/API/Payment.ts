import axios, { AxiosResponse } from "axios";

const URL: string = "http://localhost:22330/api";

interface PaymentData {
  transactionId: string;
  amount: number;
  currency: string;
  status: string;
  timestamp: string;
}

interface PaymentResponse {
  success: boolean;
  message: string;
  data: PaymentData;  
}


export const payment = async (data: unknown): Promise<PaymentResponse> => {
  try {
    const response: AxiosResponse<PaymentResponse> = await axios.post(
      `http://localhost:22330/api/fund-account-wallet/`,
      data
    );
    return response.data;
  } catch (error: unknown) {
    // Type narrowing to check if it's an AxiosError
    if (axios.isAxiosError(error)) {
      console.error("Payment Axios error:", error.message);
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};


export const verifyPayment = async (reference: string) => {
  try {
    return await axios.get(`${URL}/verify-fund/${reference}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};