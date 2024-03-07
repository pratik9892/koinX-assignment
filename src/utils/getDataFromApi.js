const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchData = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`);
  const data = await response.json();
  return data;
};
