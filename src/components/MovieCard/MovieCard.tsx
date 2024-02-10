import './MovieCard.css'
import { Button, Card, Image } from 'react-bootstrap'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MovieCard(props: any) {
    return (
        <div className='movie-card'>
            <Card >
                <Card.Img variant="top" src={props.imagePath} />

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
                                    <span>{props.imdbRating}</span>
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
                <span id='movie-name'>{props.movieName}</span>
                <span id='movie-time' >{props.movieTime}</span>
                <span id='movie-category'>Komedi</span>
            </div>

        </div>
    )
}
