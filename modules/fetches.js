import axios from "axios";
import {API_URL} from '../modules/constants'

export const getPostBySlug = async (url) => {
  return await axios.get(`${API_URL}/getPost/${url}`)
}