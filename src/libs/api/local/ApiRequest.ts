import axios from "axios";

export const getPrograms = async () => {
  const fetchResponse = await axios.get('/api/programs');

  return fetchResponse.data.data.programs;
}