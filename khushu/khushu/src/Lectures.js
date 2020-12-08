import React from 'react'
import Header from './Header'
import './Lectures.css'
import lecture1_img from "./img/lecture1.jpg"
function Lectures() {
    return (
        <div>
            <Header />
            <div className = 'lectures__container'>
                <div className = 'lectures__type'>
                    <h3 className = 'lectures__contents'>English Lectures</h3>
                    <div className = 'lectures__contents'>
                        <div className = 'lectures__single'>
                            <a href="https://www.youtube.com/watch?v=kfhdMWMEVcI" target="_blank">
                            <img src={lecture1_img} alt="lecture-1"></img>
                            </a>
                            
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-2
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-3
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-4
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-5
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-6
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-7
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-8
                        </div>
                    </div>
                </div>

                <div className = 'lectures__type'>
                    <h3 className = 'lectures__contents'>Moulana Tariq Jameel</h3>
                    <div className = 'lectures__contents'>
                        <div className = 'lectures__single'>
                            Lecture-1
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-2
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-3
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-4
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-5
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-6
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-7
                        </div>
                        <div className = 'lectures__single'>
                            Lecture-8
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lectures
