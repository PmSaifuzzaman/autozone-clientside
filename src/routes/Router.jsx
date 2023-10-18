import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import AddBrand from "../components/AddBrand/AddBrand";

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