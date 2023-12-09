import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainBody from './Components/MainBody/MainBody';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import SubBlog from './Components/SubBlogs/SubBlog';
import LogInSidebar from './Components/LogInSidebar/LogInSidebar';
import SideBar from './Components/SideBar/SideBar'
import Login from './Components/Login/Login';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';

function App() {

  const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <MainBody />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "/products/:category",
        element: <Products />
      },
      {
        path: "/products/solo",
        element: <SingleProduct />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/indi",
        element: <SubBlog />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path:'/SubBlog',
        element:<SubBlog/>
      },
    ]
  },
  {
    path: "/sidebar",
    element: <SideBar />
  },
  {
    path: "/login-sidebar",
    element: <LogInSidebar />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />
  }
])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
