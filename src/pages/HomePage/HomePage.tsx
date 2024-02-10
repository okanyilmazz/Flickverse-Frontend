import React, { useEffect, useState } from 'react'
import './HomePage.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import GetListMovieResponse from '../../models/responses/movie/getListMovieResponse'
import movieService from '../../services/movieService';
import { Paginate } from '../../models/paginate';

import Slider from "react-slick";
import CampaignCard from '../../components/CampaignCard/CampaignCard';
import { Image } from 'react-bootstrap';
import MoviePassCard from '../../components/MoviePassCard/MoviePassCard';
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
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: true
    };
    const settingsMoviePass = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true
    };

    const settingsCampaign = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
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

                <div className='campaign-area container-fluid'>
                    <div className='campaign-area-header'>
                        <h2 id='header-title'>Kampanyalar</h2>
                        <span id='header-see-more'>Tümü</span>
                    </div>
                    <div className='campaigns'>
                        <Slider className='campaign-slider' {...settingsCampaign}>
                            {
                                moviesInTheVision?.items.map((movie) => (
                                    <CampaignCard />
                                ))

                            }
                        </Slider>

                    </div>


                </div>


                <div className='cgv-movie-pass-area'>
                    <div className='cgv-movie-pass-logo col-md-2'>
                        <Image src='assets/images/logos/cgv_movie_pass_1x.svg'></Image>
                    </div>
                    <div className='cgv-movie-pass-text col-md-5 offset-2'>
                        <h1>CGV MoviePass</h1>
                        <span>Sinemada film izlemenin daha hesaplı, daha kolay, çook sürprizli yolu CGV MoviePass’te! Haydi hiç vakit kaybetmeden, paketini seç sinemaya gel! CGV Para’larınla hem mısır hem de sürpriz hediyeler senin olsun.</span>
                        <span className='text-link'>Detaylı Bilgi İçin Tıkla</span>
                    </div>

                </div>

                <div className='cgv-movie-pass-card-area container-fluid'>

                    <Slider {...settingsMoviePass}>
                        {
                            moviesInTheVision?.items.map((movie) => (
                                <MoviePassCard />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}
