import "./Details.css"

export default function Details() {
    return <>
        <section>
            <div className="container">
                <div className="row details">
                    <div className="col-6 img">
                        <img src="" alt="" />
                    </div>
                    <div className="col-6 row info">
                        <div className="col-12 name">
                            <h5>product Name</h5>
                        </div>
                        <div className="col-5 price">
                            <h5>$33</h5>
                        </div>
                        <div className="col-10 disc">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam consequatur, rem esse ducimus consequuntur! Accusamus rerum tenetur voluptas nihil.
                            </p>
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
                                    <option value="red">Black</option>
                                    <option value="red">white</option>
                                </select>
                            </div>
                        </div>
                        <div className="finilize col-12 row">
                            <div className="col-2 count">
                                <button className="counter-btn">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <span className="count-value">1</span>
                                <button className="counter-btn">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <div className="col-6 btn addtoCart">add to cart</div>
                        </div>
                        <div className="col-10 towishlist">
                            <button>
                                <i class="fa-regular fa-heart"></i>
                                add to wishlist
                            </button>
                        </div>
                        <div className="col-10 category">
                            category:
                            <p>dresses</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
