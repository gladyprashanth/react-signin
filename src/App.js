import './App.css';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import MainBody from './Components/MainBody/MainBody';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <MainBody />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/products/:name",
        element: <SingleProduct/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      },
      {
        path: "/single-product",
        element: <SingleProduct/>
      },
    ]
  }])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
