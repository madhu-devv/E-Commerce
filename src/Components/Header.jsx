import Person from '../assets/Images/Person.svg';
import { Link } from "react-router-dom";
import '../App.css'
import { CartContext } from "../Context/CartContext";
import { SearchContext} from "../Context/SearchContext";
import { useContext } from "react";

function Header() {
    const { cart } = useContext(CartContext);
    console.log(cart);
    const {searchTerm, setSearchTerm} = useContext(SearchContext);
    console.log(searchTerm);

    return (
        <>
        <nav className='nav'>
            <h3 className='playfair'>Nova</h3>
            <ul className='inter'>
                <Link to="/">
                  <li style={{color: "white", }}>Home</li>
                </Link>
                <li><input style={{borderRadius: "5px"}} type='text' placeholder='search' onChange={(e) => setSearchTerm(e.target.value)}></input></li>
                <Link to="/cart">
                   <li style={{color: "white"}}>Cart</li>
                </Link>
            </ul>
            
            <img src={Person} alt='Profile' />
        </nav>
        </>
    )
}

export default Header