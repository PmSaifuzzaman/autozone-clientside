import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import AddBrand from "../components/AddBrand/AddBrand";
import AllProducts from "../pages/AllProducts/AllProducts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path: "/allProducts", 
                element: <AllProducts />,
                loader: () => fetch(`http://localhost:5000/products`)
            },
            {
                path: "/addBrand",
                element: <AddBrand></AddBrand>
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            }
        ]
    },
]);


export default router;