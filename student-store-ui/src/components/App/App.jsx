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
  const [checkoutForm, setCheckoutForm] = useState({name: "", email:""});
  const [searchInput, setSearchInput] = useState("");
  const [isCategory, setIsCategory] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(0)

  //OBJECTS AND VARIABLES
  let filteredProducts = [];
  let productExist = false;
  //let submitSuccess;
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
  function handleOnToggle()
  {
      if(isOpen === false)
      {
        console.log("button closed, open it")
        setIsOpen(true)
      }
      else
      {
        console.log("button open, close it")
        setIsOpen(false)
      }
  }


  function handleAddItemToCart(productId)
  {
    productExist = false;
    if(shoppingCart.length > 0)
    {shoppingCart.map((element, index) => {
        if(element.itemId === productId)
        {
            element.quantity += 1
            setShoppingCart((shoppingCart) => [...shoppingCart])
            productExist = true
        }
      })}
    
     if(productExist === false)
     {
       shoppingCartItem.itemId = productId;
       shoppingCartItem.quantity = 1;
       setShoppingCart((currentProducts) => [...currentProducts, {...shoppingCartItem}])
     }
  }

  function handleRemoveItemFromCart(productId)
  {
     shoppingCart.map((element) => {
       if(element.itemId === productId)
       {

           element.quantity -= 1
           setShoppingCart((shoppingCart) => [...shoppingCart])
           if(element.quantity === 0)
           {
               setShoppingCart(shoppingCart.filter((item) => {
                 return item.itemId != productId
               }))
           }
           console.log(shoppingCart)
       }
     })
  }

  function handleOnCheckoutFormChange(name, value)
  {
    if(name === "name")
    {
      setCheckoutForm({name: value, email: checkoutForm.email})
    }
    if(name === "email")
    {
      setCheckoutForm({name: checkoutForm.name, email: value})
    }
    console.log(checkoutForm)
  }

  function handleOnSubmitCheckoutForm()
  {  
    //axios.post(`http://localhost:3001/store`, {user: checkoutForm, shoppingCart: shoppingCart})
    axios.post(`https://codepath-store-api.herokuapp.com/store`, {user: checkoutForm, shoppingCart: shoppingCart})
    .then((res) => {
      console.log(res)
      console.log("Successful")
      setSubmitSuccess(true)
      setCheckoutForm({name: "", email: ""})
      setShoppingCart([])
    })
    .catch((error) => {
      console.log("Whoops error: ")
      setError(error)
      setSubmitSuccess (false)
    })
  }

  //AXIOS COMMAND TO GET PRODUCTS DISPLAY
   async function getProducts()
   {
     setIsFetching(true)
     const response = await axios.get('https://codepath-store-api.herokuapp.com/store')
      //const response= await axios.get('http://localhost:3001/store')
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
                   setIsOpen={setIsOpen}
                   error = {error}
                   submitSuccess = {submitSuccess}
                   shoppingCart={shoppingCart} 
                   products={products} 
                   checkoutForm={checkoutForm} 
                   handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
                   handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} 
                   handleOnToggle={handleOnToggle} />

          <Routes>
            <Route path="/" element={<Home products= {products} 
                                           filteredProducts={filteredProducts}
                                           handleAddItemToCart={handleAddItemToCart} 
                                           handleRemoveItemFromCart={handleRemoveItemFromCart} 
                                           searchItems={searchItems}
                                           shoppingCart={shoppingCart}/>}></Route>

            <Route path="/products/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart}
                                                                       handleRemoveItemFromCart={handleRemoveItemFromCart}
                                                                       products={products}
                                                                       shoppingCart={shoppingCart}/>}></Route>

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
