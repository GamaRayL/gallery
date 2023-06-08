import axios from "axios";
import { IArtist, IArtwork } from "types";
require('dotenv').config();

axios.defaults.baseURL = process.env.API_URL;

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
