import {useState} from "react"

function StyleCard({style}){
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


    return(
        <div>
            <img alt="" src={style.image} />
            <button onClick={handleDetailClick}>Details</button>  
            {detailDisplay}
        </div>
    )
}
export default StyleCard