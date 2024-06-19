import {useState} from "react"

function StyleCard({handleDelete, style}){
const details = 
    <div>
    <h3>Style #{`${style.id}`} Description</h3>
    <p>Top: {style.top} </p>
    <p>Bottoms: {style.bottom}</p>
    <p>Shoes: {style.shoes}</p>
    <p>Accessories: {style.accessories}</p>   
    </div>
const [showDetails, setShowDetails] = useState(false)
const [detailDisplay, setDetailDisplay] = useState('')


function handleDetailClick(){
    if (showDetails === true){
        setDetailDisplay(details)
    } else {
        setDetailDisplay('')
    }
    setShowDetails((showDetails)=> !showDetails)
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
        </div>
    )
}
export default StyleCard