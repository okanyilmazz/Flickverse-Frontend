import React from 'react'
import './HomePage.css'
import MovieCard from '../../components/MovieCard/MovieCard'

export default function HomePage() {
    return (
        <div className='home-page'>
            <div className='home-page-content'>
                <div>
                    <MovieCard />
                </div>
                <div></div>
            </div>
        </div>
    )
}
