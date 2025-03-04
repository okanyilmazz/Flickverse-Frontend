import { useEffect, useState } from 'react'

import './HomePage.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import GetListMovieResponse from '../../models/responses/movie/getListMovieResponse'
import movieService from '../../services/movieService';
import { Paginate } from '../../models/paginate';

import Slider from "react-slick";
import CampaignCard from '../../components/CampaignCard/CampaignCard';
import { Button, Image } from 'react-bootstrap';
import MoviePassCard from '../../components/MoviePassCard/MoviePassCard';
import campaignService from '../../services/campaignService';
import GetCampaignResponse from '../../models/responses/campaign/getCampaignResponse';
export default function HomePage() {

    const [moviesInTheVision, setMoviesInTheVisions] = useState<Paginate<GetListMovieResponse>>();
    const [upComingMovies, setUpComingMovies] = useState<Paginate<GetListMovieResponse>>();
    const [campaigns, setCampaigns] = useState<Paginate<GetCampaignResponse>>();

    useEffect(() => {
        movieService.getMovieInTheVision().then(result => {
            setMoviesInTheVisions(result.data);
        })

        movieService.getUpComingMovies().then(result => {
            setUpComingMovies(result.data);
        })

        campaignService.getAll().then(result => {
            setCampaigns(result.data);
        })


    }, [])

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    const settingsMoviePass = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const settingsCampaign = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <div className='home-page'>
            <div className='home-page-content'>
                <div className='movies-in-vision-area container-fluid'>
                    <div className='area-header'>
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
                    <div className='area-header'>
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
                    <div className='area-header'>
                        <h2 id='header-title'>Kampanyalar</h2>
                        <span id='header-see-more'>Tümü</span>
                    </div>
                    <div className='campaigns'>
                        <Slider className='campaign-slider' {...settingsCampaign}>
                            {
                                campaigns?.items.map((campaign) => (
                                    <CampaignCard
                                        title={campaign.title}
                                        imagePath={campaign.imagePath} />
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

                <div className='cgv-cinema-club-area container-fluid'>
                    <div className="cgv-cinema-club-area-content">
                        <div className='cinema-club-logo'>
                            <Image src='assets/images/logos/cgv_logo_3x.png' />
                        </div>
                        <div className='cinema-club-content'>
                            <div className='top-description'>
                                <p>Bitmeyen fayda yapmışlar!</p>
                            </div>
                            <div className='sub-description'>
                                <p>%3 CGV Para ve hizmet bedeli yok. İndirimli 3D gözlüklerin yanında, doğum günü sürprizleri. Herkesten önce filmlerin ön gösterimlerinden sen haberdar ol!</p>
                            </div>
                            <div className='cinema-club-button-area'>
                                <Button className='discovery-button'>Keşfet</Button>
                                <Button className='sign-up-button'>Üye Ol</Button>
                            </div>
                        </div>
                        <div className='cinema-club-icon'>
                            <Image className='cinema-club-icon-img' src="assets/images/logos/avatar_coin_2x.png" />
                        </div>
                    </div>
                </div>

                <div className="exclusive-lounge-area container-fluid">
                    <div className='area-header'>
                        <h2 id='header-title'>Ayrıcalıklı Salonlar</h2>
                        <span id='header-see-more'>Tümü</span>
                    </div>

                    <div className='exclusive-lounges-content'>
                        <div className='exclusive-lounge'>
                            <Image src='assets/images/logos/cinema_types/imax-w.svg' />
                            <Image src='assets/images/logos/cinema_types/imax.svg' />
                        </div>
                        <div className='exclusive-lounge'>
                            <Image src='assets/images/logos/cinema_types/4dx-w.svg' />
                            <Image src='assets/images/logos/cinema_types/4dx.svg' />
                        </div>
                        <div className='exclusive-lounge'>
                            <Image src='assets/images/logos/cinema_types/gold-class-w.svg' />
                            <Image src='assets/images/logos/cinema_types/gold-class.svg' />
                        </div>


                    </div>
                </div>


                <div className="mobile-app-area container-fluid">
                    <div className="mobile-app-area-content">

                        <div className="mobile-app-area-left-content">
                            <div className='mobile-app-area-slogan'>
                                <span>Mobil Uygulamamızı Keşfedin!</span>
                            </div>
                            <div className='mobile-left-button-area'>
                                <Button><Image src='assets/images/logos/store/google_play_3x.png'></Image></Button>
                                <Button><Image src='assets/images/logos/store/app_store_3x.png'></Image></Button>
                            </div>
                        </div>
                        <div className="mobile-app-area-right-content">
                            <div className="col-auto">
                                <div>
                                    <Image src='assets/images/logos/store/phone_3x.png' />
                                </div>
                            </div>
                            <div className="col-auto">
                                <div>
                                    <Image src='assets/images/logos/store/phone_avatar_4x.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
