import ErrorPage from "./components/ErrorPage"
import App from "./components/App";
import StyleCard from "./components/StyleCard";
import StyleForm from "./components/StyleForm"
import Home from "./components/Home"

const routes = [
            {
                path: '/',
                element: <App />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: '/',
                        element: <Home />,
                       children:[
                        {
                            path: '/style-card',
                            element: <StyleCard />,
                        },  
                        {
                            path: '/style-form',
                            element: <StyleForm />,
                        }
                       ] 
                    }
                ]
            }
            
        ]

export default routes;