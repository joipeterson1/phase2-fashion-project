import {useState} from "react"
import {Link, useOutletContext} from "react-router-dom"

function StyleForm(){

 const formImg= "https://www.careergirls.org/wp-content/uploads/2018/05/FashionDesigner_1920x1080.jpg"

 const {handleAddStyle} = useOutletContext()

    const [top, setTop]=useState('')
    const [bottom, setBottom]=useState('')
    const [shoes, setShoes]=useState('')
    const [accessories, setAccessories]=useState('')
    const [image, setImage]=useState('')
    const [message, setMessage]=useState('')

    function handleSubmit(e){
        e.preventDefault()
        const submittedData = {
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
        .then((newData)=> handleAddStyle(newData))
        setTop('')
        setBottom('')
        setShoes('')
        setAccessories('')
        setImage('')
        setMessage('Your style has been added!')
    }

    return(
        <div>
            <h3> Add a New Style to Your Portfolio!!!</h3>
            <button>
            <Link to={"/style-list"}>View Style Portfolio!</Link>
            </button>
            <form className="center-form" onSubmit={handleSubmit}>
                <h2>Add A New Style</h2>
                <ul className="form-ul">
                     <li>
                        <label>Top Decription:</label>
                        <input type="text" value={top} onChange={((e)=> setTop(e.target.value))}/>
                    </li>
                     <li>
                        <label>Bottom Decription:</label>
                        <input type="text" value={bottom} onChange={((e)=> setBottom(e.target.value))}/>
                    </li>
                    <li>
                         <label>Shoe Decription:</label>
                         <input type="text" value={shoes} onChange={((e)=> setShoes(e.target.value))}/>
                    </li>
                    <li>
                         <label>Accessories Decription:</label> 
                         <input type="text" value={accessories} onChange={((e)=> setAccessories(e.target.value))}/>
                    </li>
                    <li>
                         <label>Image URL:</label>
                         <input type="text" value={image} onChange={((e)=> setImage(e.target.value))}/>
                    </li>
                    <li className="button">
                    <button type="submit">Add Style!</button>
                    </li>
                </ul>
                </form>
                {message || <h3>{message}</h3>}
                <img alt='' src={formImg} />
        </div>
    )
}
export default StyleForm