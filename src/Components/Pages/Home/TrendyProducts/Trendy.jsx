import React from 'react'

export default function Trendy() {
    return <>
        <div className="header">
            <h2>Our Trendy <span>products</span></h2>
        </div>
        <div className="nav">
            <button className="btn">all</button>
            <button className="btn">new arrivals</button>
            <button className="btn">best seller</button>
            <button className="btn">top rated</button>
        </div>
        <div className="products">

        </div>
        <div className="more">
            <button className="btn">discover more</button>
        </div>
    </>
}
