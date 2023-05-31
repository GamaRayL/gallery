import axios from "axios";
import { IArtwork } from "pages_flat/Collection/lib/types";

const API_URL = 'https://api-omarov.ru';

axios.defaults.baseURL = API_URL;

export const CollectionService = {
  async getAll() {
    const { data } = await axios.get<IArtwork[]>('/artworks');
    return data;
  }
};