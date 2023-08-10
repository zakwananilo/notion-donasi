import axios from "axios";

export const getPrograms = async () => {
  const fetchResponse = await axios.post('/api/programs');

  return fetchResponse.data.data.programs;
}