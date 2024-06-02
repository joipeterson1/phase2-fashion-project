import NavBar from "./NavBar"

function StyleForm(){
 const formImg= "https://www.careergirls.org/wp-content/uploads/2018/05/FashionDesigner_1920x1080.jpg"

    return(
        <div>
            <header>
                <NavBar />
            </header>
            <h3> Add a New Style to Your Portfolio!!!</h3>
            <img alt=''
            src={formImg} />
            <form action="/my-handling-form-page" method="post">
                <ul className="form-ul">
                     <li>
                        <label for="top">Top Decription:</label>
                        <input type="text" />
                    </li>
                     <li>
                        <label for="bottom">Bottom Decription:</label>
                        <input type="text" />
                    </li>
                    <li>
                         <label for="shoe">Shoe Decription:</label>
                         <input type="text" />
                    </li>
                    <li>
                         <label for="accessories">Accessories Decription:</label>
                         <input type="text" />
                    </li>
                    <li>
                         <label for="image">Image URL:</label>
                         <input type="text" />
                    </li>
                    <li class="button">
                    <button type="submit">Add Style!</button>
                    </li>
                </ul>
                </form>
        </div>
    )
}
export default StyleForm