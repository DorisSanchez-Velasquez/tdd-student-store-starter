import * as React from "react"
import "../Search/Search.css"

export default function Search(props) {
  return (
    <div className="search">
        <div>
          <form>
              <input type="text" placeholder="Search for product . . ." onChange={(evt) => props.searchItems(evt.target.value)} required/>
              <button className="cat-button">SEARCH</button>
          </form>
        </div>
        <div className="categories">
            <button className="cat-button" onClick={(evt) => props.searchItems("")}>ALL CATEGORIES</button>
            <button className="cat-button" onClick={(evt) => props.searchCategories("clothing")}>CLOTHING</button>
            <button className="cat-button" onClick={(evt) => props.searchCategories("food")}>FOOD</button>
            <button className="cat-button" onClick={(evt) => props.searchCategories("accessories")}>ACCESSORIES</button>
            <button className="cat-button" onClick={(evt) => props.searchCategories("tech")}>TECH</button>
        </div>
    </div>
  )
}
