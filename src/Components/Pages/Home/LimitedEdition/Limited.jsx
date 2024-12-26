import './Limited.css';

export default function Limited() {

    return (
        <>
            <section>
                <div className="container">
                    <div className="limited row">
                        <div className="col-12 header">
                            <h2>
                                limited <span>edition</span>
                            </h2>
                        </div>
                        <div className="col-1 director">
                            <i class="fa-solid fa-chevron-left"></i>
                        </div>
                        <div className="col-10 row products">
                            <div className="col-8 row">
                                <div className="col-4 item">
                                    <div className="img">
                                        <img src="img/image (18).webp" alt="" />
                                    </div>
                                    <div className="info">
                                        <p className="tag">
                                            dresses
                                        </p>
                                        <div className="towishlist">
                                            <i class="fa-regular fa-heart"></i>
                                        </div>
                                        <h5 className="name">Product name</h5>
                                        <p className="price">22 $</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 director">
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

