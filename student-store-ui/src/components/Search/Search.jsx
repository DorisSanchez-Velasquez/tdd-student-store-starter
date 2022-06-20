import * as React from "react"
import "../Search/Search.css"

export default function Search(props) {
  return (
    <div className="search">
        <div>
          <form>
              <input type="text" id="search-form" placeholder="Search for product . . ." onChange={(evt) => props.searchItems(evt.target.value, false)} required/>
              <button className="cat-button">SEARCH</button>
          </form>
        </div>
        <div className="categories">
            <button className="cat-button" onClick={(evt) => props.searchItems("")}>ALL CATEGORIES</button>
            <button className="cat-button" onClick={(evt) => props.searchItems("clothing", true)}>CLOTHING</button>
            <button className="cat-button" onClick={(evt) => props.searchItems("food", true)}>FOOD</button>
            <button className="cat-button" onClick={(evt) => props.searchItems("accessories", true)}>ACCESSORIES</button>
            <button className="cat-button" onClick={(evt) => props.searchItems("tech", true)}>TECH</button>
        </div>
    </div>
  )
}
