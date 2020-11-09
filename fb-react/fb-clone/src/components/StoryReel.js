import React from 'react'
import Story from './Story'
import './StoryReel.css'
const StoryReel = () => {
    return (
        <div className='storyReel'>
            {/* story >> img, profilepic, title*/}
            <Story 
                image="https://m.media-amazon.com/images/M/MV5BZTI2YTlhMWMtNWY1Mi00NGQ3LWFkMjEtZjI3NmUzYjI1NWFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg"
                profileSrc="https://m.media-amazon.com/images/M/MV5BZTI2YTlhMWMtNWY1Mi00NGQ3LWFkMjEtZjI3NmUzYjI1NWFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg"
                title="Sadi"
            />

            <Story 
                image="https://m.media-amazon.com/images/M/MV5BZTI2YTlhMWMtNWY1Mi00NGQ3LWFkMjEtZjI3NmUzYjI1NWFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg"
                profileSrc="https://m.media-amazon.com/images/M/MV5BZTI2YTlhMWMtNWY1Mi00NGQ3LWFkMjEtZjI3NmUzYjI1NWFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg"
                title="Sadi"
            />

            <Story 
                image="https://m.media-amazon.com/images/M/MV5BZTI2YTlhMWMtNWY1Mi00NGQ3LWFkMjEtZjI3NmUzYjI1NWFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg"
                profileSrc="https://m.media-amazon.com/images/M/MV5BZTI2YTlhMWMtNWY1Mi00NGQ3LWFkMjEtZjI3NmUzYjI1NWFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg"
                title="Sadi"
            />
        </div>
    )
}

export default StoryReel