import ErrorPage from "./components/ErrorPage"
import App from "./components/App";
import Home from "./components/Home"
import StyleList from "./components/StyleList";
import StyleForm from "./components/StyleForm"

const routes = [
    {   path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
                        {   path: '/home',
                            element: <Home />
                        },
                        {
                            path: '/style-list',
                            element: <StyleList />
                       },
       
                       {
                           path: '/style-form',
                           element: <StyleForm />
                       }
                    ]
                    }
                
                 ]
                      
        

export default routes;