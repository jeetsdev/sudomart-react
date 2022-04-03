import { Header, NewArrivalCard, Footer, CategoryCard } from "../../components/index"
import { Link } from "react-router-dom"
import {
    TeesOne,
    TeesFour,
    HoodieOne,
    IplTshirtOne,
    PoloTshirtOne,
    StickerOne,
} from "../../assets/index"
import "./Home.css"

export const Home = () => {
    return <div className="">
        <div className="container__main container__main-home center__flex flex__dir-col">
            {/* Header here */}
            <Header />
            {/* Main site wrapper here */}
            <main className="landing__site-wrapper">
                {/* Site intro here */}
                <section className="site__intro-sec grid grid__col-50-50">
                    <div className="intro__sec-box" />
                    <div className="intro__sec-box" />
                    <div className="intro__sec-text center__flex flex__dir-col">
                        <h1 className="headline-1 margin__tb-8px">Code In Style</h1>
                        <p className="text-mid margin__tb-8px">
                            Designed with <i className="fas fa-heart" /> for developers, coders
                            and programmers.
                        </p>
                        <Link to="products" className="btns btn__primary border__rad-4px center__flex">
                            Shop Now <i className="fas fa-arrow-down margin__lr-8px" />
                        </Link>
                    </div>
                    <div className="intro__sec-image center__flex">
                        <div className="image__container">
                            <img
                                src={TeesOne}
                                alt="Intro images"
                                className="image__res"
                            />
                        </div>
                    </div>
                </section>
                {/* Site Category here */}
                <section className="site__category-sec center__flex flex__dir-col">
                    <h2 className="headline-2 margin-2rem">Shop By Categories</h2>
                    <div className="grid">
                        <Link to="/products" > <CategoryCard categoryName={"Tees"} cardImage={TeesFour} /></Link>
                        <Link to="/products" > <CategoryCard categoryName={"Hoodies"} cardImage={HoodieOne} /></Link>
                        <Link to="/products" > <CategoryCard categoryName={"Stickers"} cardImage={StickerOne} /></Link>
                    </div>
                </section>
                {/* Site brands here */}
                <section className="site__newarrival-sec center__flex flex__dir-col">
                    <h2 className="newarrival__sec-title headline-2 margin-2rem">
                        New Arrivals
                    </h2>
                    <div className="newarrival__sec-cards grid grid__col-50-50">
                        <div>
                            {/* New Arrivals card here */}
                            <NewArrivalCard cardImage={IplTshirtOne} cardHeading={"IPL COLLECTION"} cardDiscription={"Check out the new IPL Tees collection here."} />
                        </div>
                        <div>
                            {/* New Arrivals card here */}
                            <NewArrivalCard cardImage={PoloTshirtOne} cardHeading={"POLO NECK TEES"} cardDiscription={"Check out the new Polo Neck Tees collection here."} />
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer here */}
            <Footer />
        </div>

    </div>
}