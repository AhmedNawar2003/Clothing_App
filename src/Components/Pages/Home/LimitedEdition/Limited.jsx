import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Limited.css';

export default function Limited() {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('/products.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }
                return response.json();
            })
            .then((data) => {
                const limitedProducts = data.filter(product => product['limited-edition'] === true);
                setProducts(limitedProducts);
                setVisibleProducts(limitedProducts);
            })
            .catch((error) => console.error('Error fetching product data:', error));
    }, []);

    const shiftLeft = () => {
        const shifted = [...visibleProducts];
        const first = shifted.shift();
        shifted.push(first);
        setVisibleProducts(shifted);
    };

    const shiftRight = () => {
        const shifted = [...visibleProducts];
        const last = shifted.pop();
        shifted.unshift(last);
        setVisibleProducts(shifted);
    };

    const handleProductClick = (product) => {
        navigate('/Details', { state: { product } });
    };

    return (
        <section>
            <div className="container">
                <div className="limited row">
                    <div className="col-12 header">
                        <h2>
                            limited <span>edition</span>
                        </h2>
                    </div>
                    <div className="col-1 director">
                        <i className="fa-solid fa-chevron-left" onClick={shiftLeft}></i>
                    </div>
                    <div className="row col-10 products">
                        {visibleProducts.map((product, index) => (
                            <div className="col-3 item" key={index}>
                                <div className="img">
                                    <img
                                        src={product.image_1}
                                        alt={product.name}
                                        onClick={() => handleProductClick(product)}
                                    />
                                    <button className="addtoCart">
                                        add to cart
                                    </button>
                                </div>
                                <div className="info">
                                    <p className="tag" onClick={() => handleProductClick(product)}>{product.category}</p>
                                    <h5 className="name" onClick={() => handleProductClick(product)}>{product.name}</h5>
                                    <p className="price" onClick={() => handleProductClick(product)}>${product.price}</p>
                                    <div className="towishlist">
                                        <i className="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-1 director">
                        <i className="fa-solid fa-chevron-right" onClick={shiftRight}></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
