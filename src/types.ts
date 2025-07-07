export type TouristAttraction = {
  id: string;
  name: string;
  description: string;
  cityId: string;
};

export type CategoryCode =
  | "ADVENTURE"
  | "BEACH"
  | "CULTURE"
  | "GASTRONOMY"
  | "HISTORY"
  | "LUXURY"
  | "NATURE"
  | "SHOPPING"
  | "URBAN"
  | "FAVORITE";

export type Category = {
  id: string;
  name: string;
  description: string | null;
  code: CategoryCode;
};

export type City = {
  id: string;
  name: string;
  country: string;
  coverImage: number;
  description: string;
  touristAttractions: TouristAttraction[];
  location: {
    latitude: number;
    longitude: number;
  };
  categories: Category[];
  relatedCitiesIds: string[];
};

// Dessa forma para pegar somente o que preciso para mostrar na Home,
// Dessa forma o FlatList não carregará todos os dados, somente o que passei abaixo que quero pegar
export type CityPreview = Pick<City, "id" | "name" | "country" | "coverImage">;
