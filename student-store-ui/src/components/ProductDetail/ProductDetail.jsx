import * as React from "react"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import ProductView from "../ProductDetail/ProductView"
import Notfound from "../NotFound/Notfound"

export default function ProductDetail() {
  const [product, setProduct] = useState(null)
  const [productNotFound, setProductNotFound] = useState(false)
  const {productId} = useParams();

  //AXIOS REQUEST TO DISPLAY PRODUCT DETAILS
  async function getProductDetails()
  {
    let response = await axios.get("/store/" + productId)
    .then((response) =>
      {setProduct(response.data.product)}
    )
    .catch(error =>
    {
      console.log("Whoops, here's an error")
      setProductNotFound(true)
    })
  }

  useEffect(() => {getProductDetails()}, [])


  //RETURN STATEMENT POSSIBILITIES
  if(productNotFound)
  {
    return(<Notfound />)
  }
  else if(product == null)
  {
    return(
      <div className="product-detail">
        <h1>Loading . . .</h1>
      </div>
    )
  }
  else
  {
      return(
        <div className="product-detail">
          <ProductView product={product}
                       productId={productId}/>
        </div>
      )
  }

}