import * as React from "react"
import {Link} from 'react-router-dom'
import "./Navbar.css"

export default function Logo() {
  return (
    <div className = "logo">
        <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVuqsRX__sah-RrnPxDtyrAx0dp_lFC5bkxBqL91bN1odDL4jPhsfOIdG5r-szVDdFLs&usqp=CAU" alt="student store logo" id="img-logo"/></Link>
    </div>
  )
}