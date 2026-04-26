import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);
  console.log(id);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.thumbnail} style={{ width: "200px", height: "200px"}} />
      <h2>{product.title}</h2>
      <p>₹ {product.price}</p>
      <p>{product.description}</p>
      

      <button onClick={() => addToCart({ id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail, })}>Add to Cart</button>
      
    </div>
  );
};

export default ProductDetails;