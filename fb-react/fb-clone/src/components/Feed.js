import React from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'

const Feed = () => {
    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic='https://m.media-amazon.com/images/M/MV5BZTI2YTlhMWMtNWY1Mi00NGQ3LWFkMjEtZjI3NmUzYjI1NWFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg'
                message='Hello firends, how are you doing today?'
                timestamp='1601493943737'
                imgName='imgName'
                username='Sadi'
            />

            <Post 
                profilePic='https://m.media-amazon.com/images/M/MV5BZTI2YTlhMWMtNWY1Mi00NGQ3LWFkMjEtZjI3NmUzYjI1NWFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg'
                message='Life is too short!'
                timestamp='1601493943737'
                imgName='imgName'
                username='Sadi'
            />            
            {
                /*
                postsData.map(entry => (
                    <Post 
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
                */
            }
        </div>
    )
}
export default Feed