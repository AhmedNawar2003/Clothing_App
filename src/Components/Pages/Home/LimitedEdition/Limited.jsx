import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './Limited.css';

export default function Limited() {
    const splideRef = useRef(null);

    useEffect(() => {
        if (splideRef.current) {
            new Splide(splideRef.current, {
                type: 'loop',
                perPage: 4,
                perMove: 1,
            }).mount();
        }
    }, []);

    return (
        <>
            <section>
                <div className="container">
                    <div className="limited">
                        <div className="header">
                            <h2>
                                limited <span>edition</span>
                            </h2>
                        </div>
                        <div className="products">
                            <div ref={splideRef} className="splide">
                                <div className="splide__track">
                                    <ul className="splide__list">
                                        <li className="splide__slide">
                                            <div className="item">
                                                <div className="img">
                                                    <img src="img/image (18).webp" alt="" />
                                                </div>
                                                <div className="info">
                                                    <p className='tag'>dresses</p>
                                                    <div className="towishlist">
                                                        <i class="fa-regular fa-heart"></i>
                                                    </div>
                                                    <h5 className="name">product name</h5>
                                                    <div className="price">
                                                        22 $
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="splide__slide"></li>
                                        <li className="splide__slide"></li>
                                        <li className="splide__slide"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

