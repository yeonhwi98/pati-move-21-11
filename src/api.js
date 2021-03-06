import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "933630eb672b2bb0350bc6e4a59c0082",
    language: "ko-KR",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  getReview: () => api.get("movie/reviews"),
  detail: (id) => api.get(`movie/${id}`),
  video: (movie_id) => api.get(`/movie/${movie_id}/videos`),
  search: (term) =>
    api.get(`search/movie`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

// 현재 상영영화
// 개봉 예정
