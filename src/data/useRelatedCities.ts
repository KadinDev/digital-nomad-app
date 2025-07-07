import { CityPreview } from "../types";
import { cities } from "./cities";

export function useRelatedCities(relatedCities: string[]): CityPreview[] {
  return cities.filter((city) => relatedCities.includes(city.id));
}
