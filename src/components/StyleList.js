import StyleCard from "./StyleCard"
import NavBar from "./NavBar"
import {useEffect, useState} from "react"
import {Link, Outlet} from "react-router-dom"

function StyleList(){
    const [styles, setStyles]= useState([])

    useEffect(()=> {
      fetch("http://localhost:3000/styles")
      .then (r=>r.json())
      .then (data => setStyles(data))
      .catch(error => console.error(error))
    },[])


const styleDisplay = styles.map((style)=> (
    <StyleCard key={style.id} style={style}/>
))
        return(
            <div>
                <header>
                    <NavBar/>
                </header>
                <h2> My Style Portfolio! </h2>
                {styleDisplay}
                <button>
                <Link to={"/style-form"} styles={styles}>Add a New Style!</Link>
                </button>
                {/*<Outlet context={styles}/>*/}
            </div>
        )
    }
    export default StyleList