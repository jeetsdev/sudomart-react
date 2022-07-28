import { Header, NewArrivalCard, Footer, CategoryCard } from "../../components/index"
import { Link, useLocation } from "react-router-dom"
import {
    TeesOne,
    TeesFour,
    HoodieOne,
    IplTshirtOne,
    PoloTshirtOne,
    StickerOne,
} from "../../assets/index"
import "./Home.css"
import { useFilter } from "../../contexts"
import { ACTION_TYPE, titleHandler } from "../../utils"
import { useEffect } from "react"

export const Home = () => {
    const { filterDispatch } = useFilter();
    const { CATEGORIES, CLEAR_ALL, SUBCATEGORIES } = ACTION_TYPE;
    const { pathname } = useLocation();

    const catClickHandler = (type, cat) => {
        filterDispatch({ type: CLEAR_ALL });
        filterDispatch({ type: type, payload: `${cat}` });
    }

    useEffect(() => {
        // changing title 
        titleHandler(pathname.split("/")[1]);
    }, [pathname])

    return (
        <main className="landing__site-wrapper">
            {/* Site intro here */}
            <section className="site__intro-sec grid grid__col-50-50">
                <div className="intro__sec-text center__flex flex__dir-col">
                    <div className="text__sec-box" />
                    <div className="text__sec-box" />
                    <h1 className="headline-1 margin__tb-8px font-primary">Code In Style</h1>
                    <p className="text-mid margin__tb-8px">
                        Designed with <i className="fas fa-heart" /> for developers, coders
                        and programmers.
                    </p>
                    <Link to="products" className="btns btn__primary border__rad-4px center__flex">
                        Shop Now <i className="fas fa-arrow-down margin__lr-8px" />
                    </Link>
                </div>
                <div className="intro__sec-image center__flex">
                    <div className="image__sec-box" />
                    <div className="image__sec-box" />
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
                <h2 className="headline-2 margin-2rem font-primary">Shop By Categories</h2>
                <div className="grid category__sec-cards">
                    <Link to="/products" onClick={() => { catClickHandler(CATEGORIES, "TEES") }}> <CategoryCard categoryName={"Tees"} cardImage={TeesFour} />
                    </Link>
                    <Link to="/products" onClick={() => { catClickHandler(CATEGORIES, "HOODIES") }}> <CategoryCard categoryName={"Hoodies"} cardImage={HoodieOne} />
                    </Link>
                    <Link to="/products" onClick={() => { catClickHandler(CATEGORIES, "STICKERS") }}> <CategoryCard categoryName={"Stickers"} cardImage={StickerOne} />
                    </Link>
                </div>
            </section>
            {/* Site brands here */}
            <section className="site__newarrival-sec center__flex flex__dir-col">
                <h2 className="newarrival__sec-title headline-2 margin-2rem font-primary">
                    New Arrivals
                </h2>
                <div className="newarrival__sec-cards grid grid__col-50-50">
                    <div>
                        {/* New Arrivals card here */}
                        <Link to={"/products"} onClick={() => { catClickHandler(SUBCATEGORIES, "IPL TEES") }}>
                            <NewArrivalCard cardImage={IplTshirtOne} cardHeading={"IPL COLLECTION"} cardDiscription={"Check out the new IPL Tees collection here."} />
                        </Link>
                    </div>
                    <div>
                        {/* New Arrivals card here */}
                        <Link to={"/products"} onClick={() => { catClickHandler(SUBCATEGORIES, "POLO TEES") }}>
                            <NewArrivalCard cardImage={PoloTshirtOne} cardHeading={"POLO NECK TEES"} cardDiscription={"Check out the new Polo Neck Tees collection here."} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}