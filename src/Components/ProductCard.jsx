import { useNavigate } from "react-router-dom";



function ProductCard({name, id, description, price, image}) {

    const navigate = useNavigate();
    console.log({image});
    return (
        <div className="product-card">
            <img src={image} alt="Product-image" className="product-img" />
            <p>{name}</p>
            <p>$ {price}</p>
            <button style={{ zIndex: 999 }} onClick={() => { console.log("Clicked"); navigate(`/product/${id}`)}}>View Details</button>
            
            {/* <p>{description} </p> */}
        </div>
    )
}


export default ProductCard