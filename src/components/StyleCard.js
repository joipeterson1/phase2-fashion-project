import {Outlet, useOutletContext} from "react-router-dom"

function StyleCard(){

    const style = useOutletContext()

    return(
        <div>
            <Outlet context={style}/>
            <img alt="" src={style.image}/>
            <p>
            Top Description: {style.top}
            Bottom Description: {style.bottom}
            Shoe Description: {style.shoe}
            Accessories Description: {style.accessories}
            </p>
        </div>
    )
}
export default StyleCard