import './App.css';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import MainBody from './Components/MainBody/MainBody';
import Test from './Components/Test/Test';

function App() {

  const appRouter = createBrowserRouter([{
    path:"/",
    element: <MainBody />,
    children:[{
      path:"/test",
      element:<Test/>
    }, {
        path: "/test/checking",
        element: "Checking"
      }]
  }])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
