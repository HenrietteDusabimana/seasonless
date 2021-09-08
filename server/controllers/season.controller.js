import { readSeasons, addNewSeason } from "../services/season.service.js";
export function fetchSeasons() {
  return readSeasons();
}

export function registerSeason() {
  return addNewSeason();
}
