import axios from "axios";

const KEYII: string = import.meta.env.VITE_MAIN_KEYIII;

export const fetchLLMModel = async (text: string) => {
  try {
    const options = {
      method: "POST",
      url: "https://infinite-gpt.p.rapidapi.com/infinite-gpt",
      headers: {
        "x-rapidapi-key": KEYII,
        "x-rapidapi-host": "infinite-gpt.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        query: text,
        sysMsg: text,
      },
    };
    const res = await axios.request(options);

    if (res.data) {
      return res;
    }
    return res;
  } catch (error) {
    return error;
  }
};
