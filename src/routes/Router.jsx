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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                // path: "/allProducts", 
                path: '/products/:brandName',
                element: <AllProducts />,
                // loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)

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
                element: <AddBrand></AddBrand>
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/detailsProduct/:id",
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
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