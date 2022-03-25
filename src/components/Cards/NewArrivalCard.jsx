
export const NewArrivalCard = ({ cardImage, cardHeading, cardDiscription }) => {
    return <div className="card card__newarrival card__badge grid bg__shadow">
        {/* Card Upper section here */}
        <p class="card__badge-icon border__rad-4px">New </p>
        <div className="card__sec-upper center__flex flex__dir-col">
            <div className="card__upper-image center__flex">
                <img
                    src={cardImage}
                    className="images"
                    alt="New Arrivals here"
                />
            </div>
        </div>
        {/* Card Lower section here */}
        <div className="card__sec-lower center__flex flex__dir-col">
            <div className="lower__sec-top text-mid">New Arrivals</div>
            <div className="lower__sec-bottom">
                <h3 className="headline-3 margin__tb-8px">{cardHeading}</h3>
                <p className="margin__tb-8px">
                    {cardDiscription}
                </p>
            </div>
        </div>
    </div>
}