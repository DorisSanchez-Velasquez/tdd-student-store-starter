import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
import About from "../About/About"
import Contact from "../Contact/Contact"
import {useState, useEffect} from "react"
import axios from "axios"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function App() {

  //USE STATE VARIABLES
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [isCategory, setIsCategory] = useState(false)

  //OBJECTS AND VARIABLES
  let filteredProducts = [];
  let shoppingCartItem = {
    itemId: 0,
    quantity: 0
  }

  //SEARCH INPUT FUNCTIONS (FILTER BY PRODUCT NAME)
  let searchItems = (searchValue, isCategory) =>
  {
      setSearchInput(searchValue)
      setIsCategory(isCategory)
  }

  function filterSearch(searchInput, isCategory)
  {
    filteredProducts = products.filter((product) =>
    {
      if(isCategory === false)
      {
        return product.name.toLowerCase().includes(searchInput.toLowerCase())
      }
      else
      {
        return product.category.includes(searchInput)
      }
    })
  }

  filterSearch(searchInput, isCategory)

  
  //HANDLER FUNCTIONS
  function handleOnToggle(evt)
  {
    evt.preventDefault();
      if({isOpen} === true)
      {
        setIsOpen(false)
      }
      else
      {
        setIsOpen(true)
      }
  }


  function handleAddItemToCart(productId)
  {
    //whoop
  }

  function handleRemoveItemFromCart(productId)
  {
    //whoop
  }

  function handleOnCheckoutFormChange(name, value)
  {
    //whoop
  }

  function handleOnSubmitCheckoutForm()
  {
    //whoop
  }

  //AXIOS COMMAND TO GET PRODUCTS DISPLAY
   async function getProducts()
   {
     setIsFetching(true)
     const response = await axios.get('https://codepath-store-api.herokuapp.com/store')
     .then(function (response) {
        console.log(response.data)
        setProducts(response.data.products)
     })
     .catch(function (error) {
        console.log("Whoops, error")
        setError(error)
     })
   }

  useEffect(() => {getProducts()}, []);




  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar isOpen={isOpen} 
                   shoppingCart={shoppingCart} 
                   products={products} 
                   checkoutForm={checkoutForm} 
                   handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
                   handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} 
                   handleonToggle={handleOnToggle} />

          <Routes>
            <Route path="/" element={<Home products= {products} 
                                           filteredProducts={filteredProducts}
                                           handleAddItemToCart={handleAddItemToCart} 
                                           handleRemoveItemFromCart={handleRemoveItemFromCart} 
                                           searchItems={searchItems}/>}></Route>

            <Route path="/products/:productId" element={<ProductDetail />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

          <About />

          <Contact />

          <Footer />
          

        </main>
      </BrowserRouter>
    </div>
  )
}
