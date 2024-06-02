import ErrorPage from "./components/ErrorPage"
import App from "./components/App";
import StyleList from "./components/StyleList";
import StyleForm from "./components/StyleForm"

const routes = [
            
                {
                    path: '/',
                    element: <App />,
                    errorElement: <ErrorPage />
                },
                {
                     path: '/style-list',
                     element: <StyleList />,
                     errorElement: <ErrorPage />,
                },  
                {
                     path: '/style-form',
                     element: <StyleForm />,
                     errorElement: <ErrorPage />,
                 }      
        ]

export default routes;