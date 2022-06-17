import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
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
          <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} handleonToggle={handleOnToggle}/>

          <Routes>
            <Route path="/" element={<Home products= {products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}></Route>
            <Route path="/products/:productId" element={<ProductDetail />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

          <Footer />
          

        </main>
      </BrowserRouter>
    </div>
  )
}
