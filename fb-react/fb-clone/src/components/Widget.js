import React from 'react'

const Widget = () => {
    return (
        <div className = "widgets">
            <iframe
                src = "https://www.youtube.com/embed?v=i3M94oGzv70"
                width = "340"
                height = "1500"
                style = {{border: "none", overflow: "hidden"}}
                scrolling = "no"
                frameborder = "0"
                allowTransparency = "true"
                allow = "encrypted-media"
            >

            </iframe>
        </div>
    )
}

export default Widget