import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import {URL_SLIDES} from '../utils/paths';

const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

const HomeSlider = () => {
    let [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchSlides = async (error) => {
            try {
                const response = await axios.get(URL_SLIDES);
                setSlides(response.data);
            } catch {
                console.log(error);
            }
        }

        fetchSlides();
    }, []) 

    //console.log(slides);
    // empty array causes useEffect to only render component on mount
    return (
        <> 
            {
                slides ?
                    <Slider {...sliderSettings}> 
                        {
                            slides.map(item => (
                                <div key={item.id}>
                                    <div 
                                        className="item_slider"
                                        style={{
                                            background: `url(/images/covers/${item.cover})`
                                        }}
                                    >
                                        <div className='caption'>
                                            <h4>{item.topic}</h4>
                                            <p>{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                : null
            }
            
        </>
    )
}
export default HomeSlider;