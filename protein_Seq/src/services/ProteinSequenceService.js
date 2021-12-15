import http from "../helpers/http-common";

export const getTranscriptBySymbol = (symbol) => {
  return http.get(`/lookup/symbol/homsap/${symbol}?;expand=1`);
};

export const getSequenceByID = (id) => {
  return http.get(`/sequence/id/${id}`);
};
