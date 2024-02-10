import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./MoviePassCard.css"
export default function MoviePassCard() {
    return (
        <div className='movie-pass-card'>
            <Card>
                <Card.Body>
                    <div className='movie-pass-card-top'>
                        <h3 className='movie-pass-price'>200 TL</h3>
                        <div className='movie-pass-items'>
                            <div className='movie-pass-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>
                                <span>200 CGV PARA</span>
                            </div>
                            <div className='movie-pass-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>
                                <span>ORTA BOY MISIR</span>
                            </div>
                        </div>
                    </div>

                    <div className='movie-card-footer'>
                        <Button className='get-ticket'>Satın Al</Button>
                        <Button className='check-movie'>Hediye Et</Button>
                    </div>

                </Card.Body>
                <Card.Img variant="top" src="assets/images/movie-pass/moviepass-3.jpg" />
            </Card>
        </div>
    )
}
