import './App.css';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import MainBody from './Components/MainBody/MainBody';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import SubBlog from './Components/SubBlogs/SubBlog';
import LogInSidebar from './Components/LogInSidebar/LogInSidebar';
import SideBar from './Components/SideBar/SideBar';

function App() {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <MainBody />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
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
    ]
  },
  {
    path: "/sidebar",
    element: <SideBar />
  },])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
