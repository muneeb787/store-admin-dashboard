import Login from "../pages/login";


export const NonLayoutRoutes = [
    {
        title: "404",
        path: "*",
        element: <>Hellow</> 
    },
    // {
    //     title: "welcome",
    //     path: "/",
    //     element: <>welcome</> 
    // },
    {
        title: "Login",
        path: "/login",
        element: <Login />
    }
    // {
    //     title: "def",
    //     path: "*",
    //     // element: 
    // },
]