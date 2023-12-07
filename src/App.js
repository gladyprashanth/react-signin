import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainBody from './Components/MainBody/MainBody';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import SubBlog from './Components/SubBlogs/SubBlog';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';
import Page4 from './Pages/Page4/Page4';
import Page5 from './Pages/Page5/Page5';

import LogInSidebar from './Components/LogInSidebar/LogInSidebar';
import SideBar from './Components/SideBar/SideBar'

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
      {
        path:'/Page1',
        element:<Page1/>
      },
      {
        path:"/Page2",
        element:<Page2/>
      },
      {
        path: "Page3",
        element:<Page3/>
      },
      {
        path:'/Page4',
        element:<Page4/>
      },
      {
        path:'/Page5',
        element:<Page5/>
      }
    ]
  },
  {
    path: "/sidebar",
    element: <SideBar />
  },
  {
    path: "/login-sidebar",
    element: <LogInSidebar />
  }])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
