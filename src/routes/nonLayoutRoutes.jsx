import Login from "../pages/login";


export const NonLayoutRoutes = [
    {
        title: "404",
        path: "*",
        element: <h1>Hello</h1> 
    },
    {
        title: "Login",
        path: "/login",
        element: <Login />
    }

]