import { Identifier } from "typescript";

export default interface AddMovieRequest {
    countryId: Identifier;
    languageId: Identifier;
    name: string;
    description: string;
    imdbRating: DoubleRange;
    releaseDate: Date;
    duration: string;
    productionYear: Date;
}