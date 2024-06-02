import NavBar from "./NavBar"
import {useOutletContext} from "react-router-dom"

function StyleForm({styles}){
 const formImg= "https://www.careergirls.org/wp-content/uploads/2018/05/FashionDesigner_1920x1080.jpg"

//const styles = useOutletContext()
 console.log(styles)
    return(
        <div>
            <header>
                <NavBar />
            </header>
            <h3> Add a New Style to Your Portfolio!!!</h3>
            <img alt='' src={formImg} />
            <form action="/my-handling-form-page" method="post">
                <ul className="form-ul">
                     <li>
                        <label>Top Decription:</label>
                        <input type="text" />
                    </li>
                     <li>
                        <label>Bottom Decription:</label>
                        <input type="text" />
                    </li>
                    <li>
                         <label>Shoe Decription:</label>
                         <input type="text" />
                    </li>
                    <li>
                         <label>Accessories Decription:</label>
                         <input type="text" />
                    </li>
                    <li>
                         <label>Image URL:</label>
                         <input type="text" />
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