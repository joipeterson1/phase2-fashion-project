import StyleCard from "./StyleCard"
import {Link, useOutletContext} from "react-router-dom"


function StyleList(){
    const {styles, setStyles} = useOutletContext()

    function handleDelete(deleted){
        const deletedStyles = styles.filter((style)=> style.id !== deleted.id)
        setStyles(deletedStyles)
    }

    function handleUpdate(updated){
        const updatedStyles = styles.map((style)=> {
            if (style.id === updated.id){
                return updated
            }else {
                return style
            }
        })
        setStyles(updatedStyles)
    }

    const styleDisplay = styles.map((style)=> (
    <StyleCard key={style.id} handleUpdate={handleUpdate} handleDelete={handleDelete} style={style}/>
))
        return(
            <div>
                <h2> My Style Portfolio! </h2>
                 <button>
                <Link to={"/style-form"}>Add a New Style!</Link>
                </button>
                {styleDisplay}
            </div>
        )
    }
    export default StyleList