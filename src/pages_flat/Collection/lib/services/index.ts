import axios from "axios";
import { IArtist, IArtwork } from "pages_flat/Collection/lib/types";

const API_URL = 'https://api-omarov.ru';

axios.defaults.baseURL = API_URL;

export const artworkService = {
  async getAll() {
    const { data } = await axios.get<IArtwork[]>('/artworks');
    return data;
  },
  async getById(id: string | undefined) {
    const { data } = await axios.get<IArtwork[]>('/artworks', {
      params: {
        id
      }
    });
    return data[0];
  },
  async getArtistById(id: string | undefined) {
    const { data } = await axios.get<IArtist[]>('/artists', {
      params: {
        id,
      }
    });
    return data[0];
  },
};
