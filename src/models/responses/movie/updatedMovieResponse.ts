import { Identifier } from "typescript";

export default interface UpdatedMovieResponse {
    id: Identifier;
    countryId: Identifier;
    languageId: Identifier;
    name: string;
    description: string;
    imdbRating: DoubleRange;
    releaseDate: Date;
    duration: string;
    productionYear: Date;
}