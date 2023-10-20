import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import AddBrand from "../components/AddBrand/AddBrand";
import AllProducts from "../pages/AllProducts/AllProducts";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import Contact from "../components/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import Details from "../components/Details/Details";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../components/MyCart/MyCart";


const router = createBrowserRouter([


    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://autozone-server-n9pqjnvg2-saifuzzamans-projects.vercel.app/brands')
            },
            {
                // path: "/allProducts", 
                path: '/products/:brandName',
                element: <AllProducts />,
                // loader: ({params}) => fetch(`https://autozone-server-n9pqjnvg2-saifuzzamans-projects.vercel.app/products/${params.brandName}`)

            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path: "/addBrand",
                element: <PrivateRoute><AddBrand></AddBrand></PrivateRoute>
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://autozone-server-n9pqjnvg2-saifuzzamans-projects.vercel.app/product/${params.id}`)
            },
            {
                path: "/detailsProduct/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`https://autozone-server-n9pqjnvg2-saifuzzamans-projects.vercel.app/product/${params.id}`)
            },
            {
                path: "/cartProducts/:userEmail",
                element: <MyCart></MyCart>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path:"/blog",
                element: <Blog></Blog>
            }
        ]
    },
]);


export default router;