import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';

export default function Details() {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <p>Error: Product data is not available</p>;
    }

    return (
        <section>
            <div className="container">
                <div className="row details">
                    <div className="col-6 img">
                        <img src={product.image_1} alt={product.name} />
                    </div>
                    <div className="col-6 row info">
                        <div className="col-12 name">
                            <h5>{product.name}</h5>
                        </div>
                        <div className="col-5 price">
                            <h5>${product.price}</h5>
                        </div>
                        <div className="col-10 desc">
                            <p>{product.description}</p>
                        </div>
                        <div className="spec col-12 row">
                            <div className="col-5 size">
                                <h6>size:</h6>
                                <select name="size" id="size">
                                    <option value="xs">xs</option>
                                    <option value="s">s</option>
                                    <option value="m">m</option>
                                    <option value="l">l</option>
                                    <option value="xl">xl</option>
                                </select>
                            </div>
                            <div className="col-5 color">
                                <h6>color:</h6>
                                <select name="color" id="color">
                                    <option value="red">red</option>
                                    <option value="black">black</option>
                                    <option value="white">white</option>
                                </select>
                            </div>
                        </div>
                        <div className="finilize col-12 row">
                            <div className="col-3 count">
                                <button className="counter-btn">
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                                <span className="count-value">1</span>
                                <button className="counter-btn">
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <div className="col-6 btn addtoCart">add to cart</div>
                        </div>
                        <div className="col-10 towishlist">
                            <button>
                                <i className="fa-regular fa-heart"></i>
                                add to wishlist
                            </button>
                        </div>
                        <div className="col-10 category">
                            category:
                            <p>{product.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
