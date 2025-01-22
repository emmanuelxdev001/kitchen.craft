import axios, { AxiosResponse } from "axios";

const URL = "https://6750661d69dc1669ec1afa55.mockapi.io/api/my-product";


// Define the structure of the expected product response
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  weight: number;
}

export const viewProduct = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get(`${URL}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("View product Axios error:", error.message);
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};
