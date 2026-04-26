import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./Context/CartContext";
import { SearchProvider } from "./Context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
 <CartProvider>
  <SearchProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SearchProvider>
</CartProvider>,
)
