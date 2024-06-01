import {Outlet, useOutletContext} from "react-router-dom"
import StyleCard from "./StyleCard"

function Home(){
const styles = useOutletContext()

const styleDisplay = styles.map((style)=> {
   <StyleCard key={style.id} style={style} />
})

    return(
        <main>
            <Outlet context={styles}/>
            {styleDisplay}
        </main>
    )
}
export default Home