
export const CategoryCard = ({ categoryName, cardImage }) => {
    return <div className="card card__vertical">

        {/* Card upper section here */}
        <div className="card__sec-upper center__flex flex__dir-col">
            <div className="card__upper-image center__flex">
                <img
                    src={cardImage}
                    alt={`${categoryName} catrgory`}
                    className="image__res"
                />
            </div>
        </div>

        {/* Card lower section here */}
        <div className="card__sec-lower center__flex flex__dir-col">
            <p className="h3">{categoryName}</p>
        </div>
    </div>
}