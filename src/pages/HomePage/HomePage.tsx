import React, { useEffect, useState } from 'react'
import './HomePage.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import GetListMovieResponse from '../../models/responses/movie/getListMovieResponse'
import movieService from '../../services/movieService';
import { Paginate } from '../../models/paginate';

import Slider from "react-slick";
export default function HomePage() {

    const [moviesInTheVision, setMoviesInTheVisions] = useState<Paginate<GetListMovieResponse>>();
    const [upComingMovies, setUpComingMovies] = useState<Paginate<GetListMovieResponse>>();

    useEffect(() => {
        movieService.getMovieInTheVision().then(result => {
            setMoviesInTheVisions(result.data);
        })

        movieService.getUpComingMovies().then(result => {
            setUpComingMovies(result.data);
        })


    }, [])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: true

    };
    return (
        <div className='home-page'>
            <div className='home-page-content'>
                <div className='movies-in-vision-area container-fluid'>
                    <div className='movies-in-vision-area-header'>
                        <h2 id='header-title'>Vizyondakiler</h2>
                        <span id='header-see-more'>Tümü</span>
                    </div>
                    <div className='movies'>
                        <Slider {...settings}>
                            {
                                moviesInTheVision?.items.map((movie) => (
                                    <MovieCard
                                        movieName={movie.name}
                                        imdbRating={movie.imdbRating}
                                        movieTime={movie.duration}
                                        imagePath={movie.imagePath} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>

                <div className='upcoming-movies-area container-fluid'>
                    <div className='upcoming-movies-area-header'>
                        <h2 id='header-title'>Yakında Vizyona Girecekler</h2>
                        <span id='header-see-more'>Tümü</span>
                    </div>
                    <div className='movies'>
                        <Slider {...settings}>
                            {
                                upComingMovies?.items.map((movie) => (
                                    <MovieCard
                                        movieName={movie.name}
                                        imdbRating={movie.imdbRating}
                                        movieTime={movie.duration}
                                        imagePath={movie.imagePath} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
