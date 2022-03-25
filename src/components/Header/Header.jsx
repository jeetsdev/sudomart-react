export const Header = () => {

    // Header icon component
    const HeaderIcon = ({ iconName }) => {
        return <a href="pages/cart.html" className="bagde__sec margin-1rem">
            <i className={`fas ${iconName}`} />
            <span className="bagde__sec-text border__rad-full center__flex">
                0
            </span>
        </a>
    }

    return <header className="main__header">
        {/* Announcment bar here */}
        <section className="header__announcment-bar center__flex">
            <p>Flat 50% off on various products.</p>
        </section>
        {/* Navbar here */}
        <nav className="header__navbar center__flex">
            <nav className="nav center__flex">
                {/* Title section here */}
                <div className="nav__title-sec">
                    <h3 className="headline-3"> SudoMart </h3>
                </div>
                {/* Search section here*/}
                <div className="nav__search-sec display__none">
                    <form action="" className="center__flex">
                        <i className="fas fa-search margin-8px txt-grey" />
                        <input type="text" placeholder="Search items here" />
                    </form>
                </div>
                {/* Button section here*/}
                <div className="nav__button-sec center__flex">
                    <a
                        href="pages/login.html"
                        className="btns btn__primary border__rad-4px"
                    >
                        Login
                    </a>
                    <HeaderIcon iconName={"fa-heart"}/>
                    <HeaderIcon iconName={"fa-shopping-bag"}/>
                </div>
            </nav>
        </nav>
    </header>
}