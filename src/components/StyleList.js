import StyleCard from "./StyleCard"
import NavBar from "./NavBar"
import {useEffect, useState} from "react"
import {Link, Outlet} from "react-router-dom"

function StyleList(){
const [styles, setStyles]= useState([])
const [top, setTop]=useState('')
const [bottom, setBottom]=useState('')
const [shoes, setShoes]=useState('')
const [accessories, setAccessories]=useState('')
const [image, setImage]=useState('')


function handleSubmit(e){
    e.preventDefault()
    const submittedData = {
        id: `${styles.length + 1}`,
        top: top,
        bottom: bottom,
        shoes: shoes,
        accessories: accessories,
        image: image,
      };

    fetch('http://localhost:3000/styles', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(submittedData)
    })
    .then((r)=> r.json())
    .then((newData)=> setStyles(newData))

}

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
                <Link to={"/style-list/style-form"} styles={styles}>Add a New Style!</Link>
                </button>
                {<Outlet context={{
                    handleSubmit: handleSubmit,
                    top: top, 
                    setTop: setTop,
                    bottom: bottom, 
                    setBottom: setBottom,
                    shoes: shoes, 
                    setShoes: setShoes,
                    accessories: accessories, 
                    setAccessories: setAccessories,
                    image: image,
                    setImage: setImage
                }}/>}
            </div>
        )
    }
    export default StyleList