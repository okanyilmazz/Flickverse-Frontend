import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { Paginate } from "../models/paginate";
import AddMovieRequest from "../models/requests/movie/addMovieRequest";
import UpdateMovieRequest from "../models/requests/movie/updateMovieRequest";
import AddedMovieResponse from "../models/responses/movie/addedMovieResponse";
import GetListMovieResponse from "../models/responses/movie/getListMovieResponse";
import GetMovieResponse from "../models/responses/movie/getMovieResponse";
import UpdatedMovieResponse from "../models/responses/movie/updatedMovieResponse";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class MovieService extends BaseService<
    Paginate<GetListMovieResponse>,
    GetMovieResponse,
    AddMovieRequest,
    AddedMovieResponse,
    UpdateMovieRequest,
    UpdatedMovieResponse> {

    constructor() {
        super()
        this.apiUrl = "Movies/GetList?PageSize=10"
    }

    getMovieInTheVision(): Promise<AxiosResponse<Paginate<GetListMovieResponse>>> {
        return axiosInstance.get<Paginate<GetListMovieResponse>>("Movies/GetMoviesInVision?PageIndex=0&PageSize=10");
    }

    getUpComingMovies(): Promise<AxiosResponse<Paginate<GetListMovieResponse>>> {
        return axiosInstance.get<Paginate<GetListMovieResponse>>("Movies/GetUpComingMovies?PageIndex=0&PageSize=10");
    }

}

export default new MovieService()