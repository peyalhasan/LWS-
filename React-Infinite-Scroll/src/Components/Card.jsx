
const Card = ({ title, thumbnail, price }) => {
    // console.log(product)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={thumbnail}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{price}</h2>
                <p>{title}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;