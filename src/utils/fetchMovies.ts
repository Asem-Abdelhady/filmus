import axios from "axios";
import { BASE_URL } from "../config/config";
import IApiResponse from "../interfaces/ApiResponse";

const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");

const fetchMovies = async (type: string): Promise<IApiResponse[]> => {
  try {
    const res = await axios.get<IApiResponse[]>(
      `${BASE_URL}/users/${userId}/${type}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    return res.data;
  } catch (err) {
    console.log(`Error fetching ${type}`);
    throw new Error();
  }
};

export default fetchMovies;
