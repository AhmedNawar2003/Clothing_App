import "./trendy.css"

export default function Trendy() {
    return <>
        <section>
            <div className="container text-center">
                <div className="row trendy">
                    <div className="header">
                        <h2>Our Trendy <span>products</span></h2>
                    </div>
                    <div className="navBtns">
                        <button className="btn">all</button>
                        <button className="btn">new arrivals</button>
                        <button className="btn">best seller</button>
                        <button className="btn">top rated</button>
                    </div>
                    <div className="row products">

                    </div>
                    <div className="more">
                        <button className="btn">discover more</button>
                    </div>
                </div>
            </div>
        </section>
    </>
}
