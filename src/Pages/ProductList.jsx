import { useState, useEffect} from 'react';
import ProductCard from '../Components/ProductCard.jsx';
import { SearchContext} from "../Context/SearchContext";
import { useContext } from "react";

function ProductList() {

const [products, setProducts] = useState([]);
const {searchTerm, setSearchTerm} = useContext(SearchContext);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((responce) => responce.json())
            .then((data) => setProducts(data.products))
            // .then((data) => console.log(data.products))
    }, [])

    const filteredProducts = products.filter(product => ((product.title).toLowerCase().includes(searchTerm.toLowerCase().trim())))
                   

    console.log(filteredProducts);

    return (
        <div className='product-list'>
          {searchTerm === ""? (products.map(product => ( <div > <ProductCard key={product.id} id={product.id} name={product.title} description={product.description} price={product.price} image ={product.thumbnail} /> </div> )))
          :searchTerm && filteredProducts.length === 0 ? <p style={{margin : "0 auto"}}>No Products Found</p>: filteredProducts.map(product => ( <div > <ProductCard key={product.id} id={product.id} name={product.title} description={product.description} price={product.price} image ={product.thumbnail} /> </div> )) }
        </div>
    )


}

export default ProductList