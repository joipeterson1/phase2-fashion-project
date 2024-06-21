import {useState} from "react"
import StyleUpdateForm from "./StyleUpdateForm"
function StyleCard({handleUpdate, handleDelete, style}){

    const [showDetails, setShowDetails] = useState(false)
    const [detailDisplay, setDetailDisplay] = useState('')
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [styleUpdateForm, setStyleUpdateForm] = useState('')

const details = 
    <div>
    <h3>Style #{`${style.id}`} Description</h3>
    <p>Top: {style.top} </p>
    <p>Bottom: {style.bottom}</p>
    <p>Shoes: {style.shoes}</p>
    <p>Accessories: {style.accessories}</p>   
    </div>

function handleDetailClick(){
    if (showDetails === true){
        setDetailDisplay(details)
    } else {
        setDetailDisplay('')
    }
    setShowDetails((showDetails)=> !showDetails)
}

function handleUpdateToggle(){
    if (showUpdateForm === false){
        setStyleUpdateForm(<StyleUpdateForm style={style} handleUpdate={handleUpdate}/>)
    } else {
        setStyleUpdateForm('')
    }
   setShowUpdateForm((showUpdateForm)=> !showUpdateForm)
}

function handleDeleteClick(){
fetch(`http://localhost:3000/styles/${style.id}`,{
    method: "DELETE",
})
.then(r => r.json())
.then(()=> handleDelete(style))
}

    return(
        <div>
            <img alt="" src={style.image} />
            <button onClick={handleDetailClick}>Details</button>  
            <button onClick={handleDeleteClick}>Delete Style</button>  
            {detailDisplay}
            <button onClick={handleUpdateToggle}>Update Style</button>
            {styleUpdateForm}
        </div>
    )
}
export default StyleCard