

function StyleCard({style}){

    return(
        <div>
            <img alt="" src={style.image} />
            <h3>Style #{`${style.id}`} Description</h3>
            <p>Top: {style.top} </p>
            <p>Bottoms: {style.bottom}</p>
            <p>Shoes: {style.shoes}</p>
            <p>Accessories: {style.accessories}</p>   
        </div>
    )
}
export default StyleCard