import { API_URL2 } from "../Config/Config";

export const fetchSearchData = value => {
  const url = [`${API_URL2}/search?q=${value}&media_type=image`];
  return fetch(url).then(response => response.json());
};

export const fetchImageData = id => {
  const url = [`${API_URL2}/search?nasa_id=${id}&media_type=image`];
  return fetch(url).then(response => response.json());
};

