import {useState} from "react"
function StyleUpdateForm({style, handleUpdate}){

    const [updateTop, setUpdateTop] = useState('')
    const [updateBottom, setUpdateBottom] = useState('')
    const [updateShoes, setUpdateShoes] = useState('')
    const [updateAccessories, setUpdateAccessories] = useState('')
    const [updateImage, setUpdateImage] = useState('')


function handleUpdateSubmit(event){
    console.log(event)
    event.preventDefault()
fetch(`http://localhost:3000/styles/${style.id}`,{
method: "PATCH",
headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify({
        top: updateTop,
        bottom: updateBottom,
        shoes: updateShoes,
        accessories: updateAccessories,
        image: updateImage,
}),
})
.then(r => r.json())
.then((updatedData)=> handleUpdate(updatedData))

setUpdateAccessories('')
setUpdateBottom('')
setUpdateImage('')
setUpdateShoes('')
setUpdateTop('')

}
    

 return(
     <div>
        <h3> Update This Style!</h3>
        <form className="update-form" onSubmit={handleUpdateSubmit}>
        <ul className="form-ul">
         <li>
            <label>Top Decription:</label>
            <input type="text" name="top" value={updateTop} onChange={((e)=> setUpdateTop(e.target.value))}/>
        </li>
         <li>
            <label>Bottom Decription:</label>
            <input type="text" name="bottom" value={updateBottom} onChange={((e)=> setUpdateBottom(e.target.value))}/>
        </li>
        <li>
             <label>Shoe Decription:</label>
             <input type="text" name="shoes"  value={updateShoes} onChange={((e)=> setUpdateShoes(e.target.value))}/>
        </li>
        <li>
             <label>Accessories Decription:</label> 
             <input type="text" name="accessories" value={updateAccessories} onChange={((e)=> setUpdateAccessories(e.target.value))}/>
        </li>
        <li>
             <label>Image URL:</label>
             <input type="text" name="image" value={updateImage} onChange={((e)=> setUpdateImage(e.target.value))}/>
        </li>
        <li className="">
        <button type="submit">Update!</button>
        </li>
        </ul>
         </form>
    </div>
    )
}
export default StyleUpdateForm