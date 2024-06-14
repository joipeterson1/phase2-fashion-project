import StyleCard from "./StyleCard"
import {Link, useOutletContext} from "react-router-dom"


function StyleList(){
    const {styles} = useOutletContext()

    const styleDisplay = styles.map((style)=> (
    <StyleCard key={style.id} style={style}/>
))
        return(
            <div>
                <h2> My Style Portfolio! </h2>
                {styleDisplay}
                <button>
                <Link to={"/style-form"} /*styles={styles} setStyles={setStyles}*/>Add a New Style!</Link>
                </button>
            </div>
        )
    }
    export default StyleList