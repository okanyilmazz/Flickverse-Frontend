import './MovieCard.css'
import { Button, Card, Image } from 'react-bootstrap'
export default function MovieCard() {
    return (
        <div className='movie-card'>
            <Card >
                <Card.Img variant="top" src="assets/images/movies/lohusa/lohusa-vizyon-422x584px.jpg" />

                <Card.Body className='movie-card-hover'>
                    <div className='movie-card-hover-content'>
                        <div className='movie-card-top-content'>
                            <div className='movie-card-techs-items'>
                                <div className='movie-card-tech-item'>
                                    <Image src='assets/images/logos/cinema_types/gold-class-w.svg' />
                                </div>
                                <div className='movie-card-tech-item'>
                                    <Image src='assets/images/logos/cinema_types/premium-cinema-w.svg' />
                                </div>
                                <div className='movie-card-tech-item'>
                                    <Image src='assets/images/logos/cinema_types/platinum-screen-x-w.svg' />
                                </div>
                                <div className='movie-card-tech-item'>
                                    <Image src='assets/images/logos/cinema_types/sky-auditorium-w.svg' />
                                </div>
                                <div className='movie-card-tech-item'>
                                    <strong>+1</strong>
                                </div>
                            </div>

                            <div className='imdb-point'>
                                <div className='icon-area'>
                                    <Image src='assets/images/logos/star.svg' />
                                </div>
                                <div className='text-area'>
                                    <span>8.2</span>
                                </div>
                            </div>
                        </div>

                        <div className='movie-card-play'>
                            <Image src='assets/images/logos/movie_banner/play.svg' />
                        </div>
                        <div className='movie-card-footer'>
                            <Button className='get-ticket'>Hemen Bilet Al</Button>
                            <Button className='check-movie'>İncele</Button>
                        </div>
                    </div>
                </Card.Body>

            </Card>
            <div className='movie-detail'>
                <span id='movie-name'>Lohusa</span>
                <span id='movie-time' >1 sa 58 dk</span>
                <span id='movie-category'>Komedi</span>
            </div>
        </div>
    )
}
