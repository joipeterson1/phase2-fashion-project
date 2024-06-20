import StyleCard from "./StyleCard"
import {Link, useOutletContext} from "react-router-dom"


function StyleList(){
    const {styles, setStyles} = useOutletContext()

    function handleDelete(deleted){
        const updatedStyles = styles.filter((style)=> style.id !== deleted.id)
        setStyles(updatedStyles)
    }

    const styleDisplay = styles.map((style)=> (
    <StyleCard key={style.id} handleDelete={handleDelete} style={style}/>
))
        return(
            <div>
                <h2> My Style Portfolio! </h2>
                {styleDisplay}
                <button>
                <Link to={"/style-form"}>Add a New Style!</Link>
                </button>
            </div>
        )
    }
    export default StyleList