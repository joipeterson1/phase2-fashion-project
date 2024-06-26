import NavBar from "./NavBar"
import {useRouteError} from "react-router-dom"

function ErrorPage(){
    const error = useRouteError()
    console.error(error)

    return(
        <>
        <header>
            <NavBar />
        </header>
        <main>
            <h1> Oops! An Error has Occured</h1>
        </main>
        </>
    )
}
export default ErrorPage