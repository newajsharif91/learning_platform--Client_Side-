import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CartDetails from "../../components/CartDetails/CartDetails";
import CheckOut from "../../components/CheckOut/CheckOut";
import Courses from "../../components/Courses/Courses";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import NotFound from "../../components/NotFound/NotFound";
import Login from "../../components/Sheared/Login/Login";
import Register from "../../components/Sheared/Register/Register";
import Main from "../../layout/Main";
import PrivateRouter from "../../PrivateRouter/PrivateRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/cartdetails/:id",
        element: <CartDetails></CartDetails>,
        loader: ({ params }) =>
          fetch(`https://assigment-10.vercel.app/courses-details/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRouter>
            <CheckOut></CheckOut>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://assigment-10.vercel.app/courses-details/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
