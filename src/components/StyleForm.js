import {useOutletContext} from "react-router-dom"
import {useState} from "react"

function StyleForm(){
 const formImg= "https://www.careergirls.org/wp-content/uploads/2018/05/FashionDesigner_1920x1080.jpg"
const [top, setTop]=useState('')
const [bottom, setBottom]=useState('')
const [shoe, setShoe]=useState('')
const [accessories, setAccessories]=useState('')
const [imageURL, setImageURL]=useState('')
const styles = useOutletContext()


    return(
        <div>
            <h3> Add a New Style to Your Portfolio!!!</h3>
            <img alt='' src={formImg} />
            <form action="/my-handling-form-page" method="post">
                <ul className="form-ul">
                     <li>
                        <label>Top Decription:</label>
                        <input type="text" value={top} onChange={(e)=> setTop(e.target.value)}/>
                    </li>
                     <li>
                        <label>Bottom Decription:</label>
                        <input type="text" value={bottom} onChange={(e)=> setBottom(e.target.value)}/>
                    </li>
                    <li>
                         <label>Shoe Decription:</label>
                         <input type="text" value={shoe} onChange={(e)=> setShoe(e.target.value)}/>
                    </li>
                    <li>
                         <label>Accessories Decription:</label>
                         <input type="text" value={accessories} onChange={(e)=> setAccessories(e.target.value)}/>
                    </li>
                    <li>
                         <label>Image URL:</label>
                         <input type="text" value={imageURL} onChange={(e)=> setImageURL(e.target.value)}/>
                    </li>
                    <li className="button">
                    <button type="submit">Add Style!</button>
                    </li>
                </ul>
                </form>
        </div>
    )
}
export default StyleForm